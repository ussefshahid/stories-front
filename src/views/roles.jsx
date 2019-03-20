import React, { Component } from 'react';
import BCrumb from '../components/bcrumb';
import CustomJumbotron from '../components/CustomJumbotron';
import {Button} from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import RoleSearchForm from '../components/role/RoleSearchForm';
import ListRoles from '../components/role/ListRoles';
import { RoleModalUpdate, RoleModalAdd } from '../components/role/RoleModal';

class Roles extends Component {
    state = { 
        UPDATE: 'update',
        ADD: 'add',
        rolesList: [],
        showModalUpdate: false,
        updateRoleObj: {},
        showModalAdd: false,
        addedRole: {}
    }

    getRoles(){
        axios.get('http://10.42.2.206:8080/api/roles')
            .then(json => {
                this.setState({
                    rolesList: json.data
                })
            });
    }

    deleteRole(id){
        axios.delete('http://10.42.2.206:8080/api/role/'+id)
            .then(json => {
                this.getRoles();
            });
    }

    addRole = (role) => {
        axios.post('http://10.42.2.206:8080/api/role', role)
        .then(json=>{
            this.getRoles();
        });
    }

    updateRole = (role) => {
        axios.put('http://10.42.2.206:8080/api/role', role)
            .then(json=>{
                this.getRoles();
            });
    }

    searchRoles = (name) => {
        if(name.length === 0) this.getRoles();
        else{
            axios.get('http://10.42.2.206:8080/api/role/'+name)
            .then(json => {
                this.setState({
                    rolesList: json.data
                })
            });
        }
    }

    componentDidMount(){
        this.getRoles();
    }

    handleEdit = (role) => {
        this.setState({updateRoleObj: role});
        this.handleShow(this.state.UPDATE);
    }

    handleSaveEdit = () => {
        const {updateRoleObj} = this.state;
        this.updateRole(updateRoleObj);
        this.handleClose(this.state.UPDATE);
    }

    handleSaveAdd = () => {
        const {addedRole} = this.state;
        this.addRole(addedRole);
        this.handleClose(this.state.ADD);
    }

    handleSearchChange = (event) => {
        const keyword = event.target.value;
        this.searchRoles(keyword);
    }

    handleDelete = (roleID) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.deleteRole(roleID);
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
        this.getRoles();
    }
    
    handleShow = (action) => {
        (action === 'update')? this.setState({ showModalUpdate: true }): this.setState({ showModalAdd: true });
    }

    handleOnChangeAdd = (event) =>{
        const {addedRole} = this.state;
        
        addedRole.name = event.target.value;
        this.setState({addedRole});
    }

    handleOnChangeUpdate = (event) => {
        const {updateRoleObj} = this.state;

        updateRoleObj.name = event.target.value;
        this.setState({updateRoleObj});
    }

    render() { 
        const {ADD, UPDATE, rolesList} = this.state;

        return ( 
            <React.Fragment>
                <BCrumb name="Roles" />
                <CustomJumbotron name="Roles" length={rolesList.length} />
                <hr/>
                <Button onClick={() => this.handleShow(ADD)} variant="primary" size="lg" block>Add Role</Button>
                <RoleSearchForm handleSearchChange={this.handleSearchChange} />
                <ListRoles rolesList={rolesList} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                <RoleModalUpdate 
                    showModalUpdate={this.state.showModalUpdate} handleClose={this.handleClose}
                    handleOnChangeUpdate={this.handleOnChangeUpdate} updateRole={this.state.updateRoleObj}
                    handleSaveEdit={this.handleSaveEdit} UPDATE={UPDATE}
                />
                <RoleModalAdd 
                    showModalAdd={this.state.showModalAdd} handleClose={this.handleClose}
                    handleOnChangeAdd={this.handleOnChangeAdd} 
                    handleSaveAdd={this.handleSaveAdd} ADD={ADD}
                />
            </React.Fragment>
        );
    }
}
 
export default Roles;