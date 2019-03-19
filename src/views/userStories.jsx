import React, { Component } from 'react';
import axios from 'axios';
import BCrumb from '../components/bcrumb';
import {Row, Button} from 'react-bootstrap';
import CustomJumbotron from '../components/CustomJumbotron';
import StoriesSearchForm from '../components/stories/StoriesSearchForm';
import StoryCard from '../components/stories/StoryCard';
import { StoryModalUpdate, StoryModalAdd } from '../components/stories/StoryModal';
import swal from 'sweetalert';

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
        axios.delete('http://10.42.2.206:8080/api/story/'+id)
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
        this.handleClose();
    }

    handleSaveEdit = () => {
        const {updateStory} = this.state;
        this.updateStory(updateStory);
        this.handleClose();
    }

    handleSearchChange = (event) => {
        const keyword = event.target.value;
        this.searchStories(keyword);
    }

    handleEdit = (story) => {
        this.setState({updateStory: story});
        this.handleShow(this.state.UPDATE);
    }

    handleDelete = (StoryID) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.deleteStory(StoryID);
                swal("Poof! Your item has been deleted!", {
                icon: "success",
              });
            } else {
                swal("Your item is safe!");
            }
          });
    }

    handleClose = () => {
        this.setState({ showModalUpdate: false });
        this.setState({ showModalAdd: false });
        this.getStories();
    }
    
    handleShow = (action) => {
        (action === 'update')? this.setState({ showModalUpdate: true }): this.setState({ showModalAdd: true });
    }

    render() { 
        const {ADD, storiesList} = this.state;

        return ( 
            <React.Fragment>
                <BCrumb name="User Stories" />
                <CustomJumbotron name="User Stories" length={storiesList.length} />
                <hr/>
                <Button onClick={() => this.handleShow(ADD)} variant="primary" size="lg" block>Add a story</Button>
                <StoriesSearchForm handleSearchChange={this.handleSearchChange} />
                <Row>
                    {storiesList.map(story => (
                        <StoryCard key={story.jiraKey} story={story} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                    ))}
                </Row>
                <StoryModalUpdate updateStory={this.state.updateStory} showModalUpdate={this.state.showModalUpdate}
                    handleSaveEdit={this.handleSaveEdit} handleClose={this.handleClose} 
                    handleOnChangeUpdate={this.handleOnChangeUpdate} 
                />
                <StoryModalAdd showModalAdd={this.state.showModalAdd} handleSaveAdd={this.handleSaveAdd}
                    handleClose={this.handleClose} handleOnChangeAdd={this.handleOnChangeAdd}
                />
            </React.Fragment>
        );
    }
}
 
export default UserStories;