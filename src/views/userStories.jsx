import React, { Component } from 'react';
import axios from 'axios';
import BCrumb from '../components/bcrumb';
import {Card, Row, Button, Form, InputGroup, Jumbotron, Badge, Modal} from 'react-bootstrap';

class UserStories extends Component {
    state = { 
        UPDATE: 'update',
        ADD: 'add',
        storiesList: [],
        showModalUpdate: false,
        updateStory: {},
        showModalAdd: false,
        addedStory: {}
    }

    componentDidMount(){
        this.getStories();
    }

    getStories(){
        axios.get('http://10.42.2.206:8080/api/stories')
            .then(json => {
                this.setState({
                    storiesList: json.data
                })
            });
    }

    addStory = (story) => {
        axios.post('http://localhost:8080/api/story', story)
        .then(json=>{
            this.getStories();
        })
    }

    updateStory = (story) => {
        axios.put('http://localhost:8080/api/story', story)
        .then(json=>{
            this.getStories();
        })
    }

    deleteStory(id){
        axios.delete('http://localhost:8080/api/story/'+id)
            .then(json => {
                this.getStories();
            })
    }

    searchStories = (name) => {
        if(name.length === 0) this.getStories();
        else{
            axios.get('http://10.42.2.206:8080/api/story/search/'+name)
            .then(json => {
                this.setState({
                    storiesList: json.data
                })
            })
        }
    }

    handleOnChangeAdd = (event) =>{
        const {addedStory} = this.state;
        
        addedStory[event.target.name] = event.target.value;
        this.setState({addedStory});
    }

    handleOnChangeUpdate = (event) => {
        const {updateStory} = this.state;

        updateStory[event.target.name] = event.target.value;
        this.setState({updateStory});
    }

    handleSaveAdd = () => {
        const {addedStory} = this.state;
        this.addStory(addedStory);
        this.handleClose(this.state.ADD);
    }

    handleSaveEdit = () => {
        const {updateStory} = this.state;
        this.updateStory(updateStory);
        this.handleClose(this.state.UPDATE);
    }

    handleSearchChange = (event) => {
        const keyword = event.target.value;
        this.searchStories(keyword);
    }

    handleEdit(story){
        this.setState({updateStory: story});
        this.handleShow(this.state.UPDATE);
    }

    handleDelete(StoryID){
        if(!window.confirm('Are you sure to delete this item?')) return;
        this.deleteStory(StoryID);
    }

    handleClose(action) {
        (action === 'update')? this.setState({ showModalUpdate: false }): this.setState({ showModalAdd: false });
        this.getStories();
    }
    
    handleShow = (action) => {
        (action === 'update')? this.setState({ showModalUpdate: true }): this.setState({ showModalAdd: true });
    }

    render() { 
        const {UPDATE, ADD, storiesList} = this.state;

        return ( 
            <React.Fragment>
                <BCrumb name="User Stories" />

                <Jumbotron>
                    <h2>User Stories page <Badge variant="secondary">{storiesList.length}</Badge></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa, sapiente voluptatum? Quisquam, labore ipsam accusamus sint at eos nostrum natus velit ut quae? Veniam dolorum harum commodi eum natus explicabo.</p>
                </Jumbotron>
                <hr/>
                <Button onClick={() => this.handleShow(ADD)} variant="primary" size="lg" block>Add a story</Button>

                <Form.Group md="4" className="m-3">
                    <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend4">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="Search for a story"
                        onChange={this.handleSearchChange}
                        aria-describedby="inputGroupPrepend4"
                        required
                    />
                    </InputGroup>
                </Form.Group>

                <Row>
                    {storiesList.map(story => (
                        <Card bg="light" key={story.jiraKey} style={{ width: '18rem' }} className="m-2">
                            <Card.Header>Story ID: {story.jiraKey}</Card.Header>
                            <Card.Body>
                                Story name:
                                <Card.Title> {story.title}</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button onClick={() => this.handleEdit(story)} variant="outline-primary">Edit</Button>
                                <Button style={{float: 'right'}} onClick={() => this.handleDelete(story.jiraKey)} variant="outline-danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>

                <Modal size="lg" show={this.state.showModalUpdate} onHide={() => this.handleClose(UPDATE)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update story</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group md="4" className="m-3">
                            <Form.Label>Jira KEY: </Form.Label>
                            <Form.Control type="number" name="jiraKey" onChange={this.handleOnChangeUpdate} value={this.state.updateStory.jiraKey} required />
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story title: </Form.Label>
                            <Form.Control type="text" name="title" onChange={this.handleOnChangeUpdate} value={this.state.updateStory.title} required />
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story point: </Form.Label>
                            <Form.Control type="number" name="storyPoint" onChange={this.handleOnChangeUpdate} value={this.state.updateStory.storyPoint} required />
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story priority: </Form.Label>
                            <Form.Control type="number" name="priority" onChange={this.handleOnChangeUpdate} value={this.state.updateStory.priority} required />
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story state: </Form.Label>
                            <Form.Control type="text" name="storyState" onChange={this.handleOnChangeUpdate} value={this.state.updateStory.storyState} required />
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose(UPDATE)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSaveEdit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                        
                <Modal size="lg" show={this.state.showModalAdd} onHide={() => this.handleClose(ADD)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Story</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Jira KEY: </Form.Label>
                            <Form.Control type="number" name="jiraKey" onChange={this.handleOnChangeAdd} required/>
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story title: </Form.Label>
                            <Form.Control type="text" name="title" onChange={this.handleOnChangeAdd} required/>
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story point: </Form.Label>
                            <Form.Control type="number" name="storyPoint" onChange={this.handleOnChangeAdd} required/>
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story priority: </Form.Label>
                            <Form.Control type="number" name="priority" onChange={this.handleOnChangeAdd} required/>
                        </Form.Group>

                        <Form.Group md="4" className="m-3">
                            <Form.Label>Story state: </Form.Label>
                            <Form.Control type="text" name="storyState" onChange={this.handleOnChangeAdd} required/>
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose(ADD)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSaveAdd}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

            </React.Fragment>
        );
    }
}
 
export default UserStories;