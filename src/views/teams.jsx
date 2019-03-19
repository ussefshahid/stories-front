import React, { Component } from 'react';
import axios from 'axios';
import BCrumb from '../components/bcrumb';
import {Row, Button} from 'react-bootstrap';
import {TeamModalUpdate, TeamModalAdd} from '../components/team/TeamModal';
import TeamCard from '../components/team/TeamCard';
import TeamSearchForm from '../components/team/TeamSearchForm';
import CustomJumbotron from '../components/CustomJumbotron';

class Teams extends Component {
    state = { 
        UPDATE: 'update',
        ADD: 'add',
        teamsList: [],
        showModalUpdate: false,
        updateTeamObj: {},
        showModalAdd: false,
        addedTeam: {}
    }
    getTeams(){
        axios.get('http://10.42.2.206:8080/api/teams')
            .then(json => {
                this.setState({
                    teamsList: json.data
                })
            });
    }

    deleteTeam(id){
        axios.delete('http://localhost:8080/api/team/'+id)
            .then(json => {
                this.getTeams();
            })
    }

    addTeam = (team) => {
        axios.post('http://localhost:8080/api/team', team)
        .then(json=>{
            this.getTeams();
        })
    }

    updateTeam = (team) => {
        axios.put('http://localhost:8080/api/team', team)
            .then(json=>{
                this.getTeams();
            })
    }

    searchTeams = (name) => {
        if(name.length === 0) this.getTeams();
        else{
            axios.get('http://10.42.2.206:8080/api/team/search/'+name)
            .then(json => {
                this.setState({
                    teamsList: json.data
                })
            })
        }
    }

    componentDidMount(){
        this.getTeams();
    }

    handleEdit = (team) => {
        this.setState({updateTeamObj: team});
        this.handleShow(this.state.UPDATE);
    }

    handleSaveEdit = () => {
        const {updateTeamObj} = this.state;
        this.updateTeam(updateTeamObj);
        this.handleClose(this.state.UPDATE);
    }

    handleSaveAdd = () => {
        const {addedTeam} = this.state;
        this.addTeam(addedTeam);
        this.handleClose(this.state.ADD);
    }

    handleSearchChange = (event) => {
        const keyword = event.target.value;
        this.searchTeams(keyword);
    }

    handleDelete = (teamID) => {
        if(!window.confirm('Are you sure to delete this item?')) return;
        this.deleteTeam(teamID);
    }

    handleClose = () => {
        this.setState({ showModalUpdate: false });
        this.setState({ showModalAdd: false });
        this.getTeams();
    }
    
    handleShow = (action) => {
        (action === 'update')? this.setState({ showModalUpdate: true }): this.setState({ showModalAdd: true });
    }

    handleOnChangeAdd = (event) =>{
        const {addedTeam} = this.state;
        
        addedTeam.name = event.target.value;
        this.setState({addedTeam});
    }

    handleOnChangeUpdate = (event) => {
        const {updateTeamObj} = this.state;

        updateTeamObj.name = event.target.value;
        this.setState({updateTeamObj});
    }

    render() { 
        const {UPDATE, ADD, teamsList} = this.state;

        return ( 
            <React.Fragment>
                <BCrumb name="Teams" />
                <CustomJumbotron name="Teams" length={teamsList.length} />
                <hr/>
                <Button onClick={() => this.handleShow(ADD)} variant="primary" size="lg" block>Add team</Button>
                <TeamSearchForm handleSearchChange={this.handleSearchChange} />
                <Row>
                    {teamsList.map(team => (
                        <TeamCard key={team.id} team={team} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                    ))}
                </Row>
                <TeamModalUpdate 
                    showModalUpdate={this.state.showModalUpdate} handleClose={this.handleClose}
                    handleOnChangeUpdate={this.handleOnChangeUpdate} updateTeam={this.state.updateTeamObj}
                    handleSaveEdit={this.handleSaveEdit} UPDATE={UPDATE}
                />
                <TeamModalAdd 
                    showModalAdd={this.state.showModalAdd} handleClose={this.handleClose}
                    handleOnChangeAdd={this.handleOnChangeAdd} 
                    handleSaveAdd={this.handleSaveAdd} ADD={ADD}
                />
            </React.Fragment>
         );
    }
}
 
export default Teams;