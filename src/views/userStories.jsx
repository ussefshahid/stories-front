import React, { Component } from 'react';
import axios from 'axios';
import BCrumb from '../components/bcrumb';
import {Button} from 'react-bootstrap';
import CustomJumbotron from '../components/CustomJumbotron';
import StoriesSearchForm from '../components/stories/StoriesSearchForm';
import { StoryModalUpdate, StoryModalAdd, StoryModalDetails } from '../components/stories/StoryModal';
import swal from 'sweetalert';
import ListStories from '../components/stories/ListStories';

class UserStories extends Component {
    state = { 
        UPDATE: 'update',
        ADD: 'add',
        storiesList: [],
        showModalUpdate: false,
        updateStory: {jiraKey:'',title:'',storyPoint:'',priority:'',storyState:''},
        showModalAdd: false,
        addedStory: {jiraKey:'',title:'',storyPoint:'',priority:'',storyState:''},
        detailsStory: {},
        showModalDetails: false
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
        axios.post('http://10.42.2.206:8080/api/story', story)
        .then(json=>{
            this.getStories();
        })
    }

    updateStory = (story) => {
        axios.put('http://10.42.2.206:8080/api/story', story)
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

    handleShowDetails = (story) => {
        this.setState({showModalDetails: true, detailsStory: story});
    }

    handleClose = () => {
        this.setState({ showModalUpdate: false, showModalAdd: false, showModalDetails: false });
        this.getStories();
    }
    
    handleShow = (action) => {
        (action === 'update')? this.setState({ showModalUpdate: true }): this.setState({ showModalAdd: true });
    }

    render() { 
        const {ADD, storiesList, showModalDetails, detailsStory, addedStory} = this.state;

        return ( 
            <React.Fragment>
                <BCrumb name="User Stories" />
                <CustomJumbotron name="User Stories" length={storiesList.length} />
                <hr/>
                <Button onClick={() => this.handleShow(ADD)} variant="primary" size="lg" block>Add a story</Button>
                <StoriesSearchForm handleSearchChange={this.handleSearchChange} />
                <ListStories handleShowDetails={this.handleShowDetails} storiesList={storiesList} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                <StoryModalUpdate updateStory={this.state.updateStory} showModalUpdate={this.state.showModalUpdate}
                    handleSaveEdit={this.handleSaveEdit} handleClose={this.handleClose} 
                    handleOnChangeUpdate={this.handleOnChangeUpdate} 
                />
                <StoryModalAdd showModalAdd={this.state.showModalAdd} handleSaveAdd={this.handleSaveAdd}
                    handleClose={this.handleClose} handleOnChangeAdd={this.handleOnChangeAdd} addedStory={addedStory}
                />
                <StoryModalDetails storyObj={detailsStory} showModalDetails={showModalDetails} handleClose={this.handleClose} />
            </React.Fragment>
        );
    }
}
 
export default UserStories;