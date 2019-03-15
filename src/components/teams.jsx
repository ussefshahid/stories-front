import React, { Component } from 'react';
import {Nav, ButtonToolbar, Button, Table, Form, InputGroup, Jumbotron, Badge, Breadcrumb} from 'react-bootstrap';

class Teams extends Component {
    state = { 
        isLoaded: false,
        teamsList: []
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/teams')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    teamsList: json
                })
            })
    }

    handleEdit(){
        console.log('edit handling');
    }

    handleDelete(){
        console.log('delete handling');
    }

    render() { 
        const {isLoaded, teamsList} = this.state;

        return ( 
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Components
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Teams</Breadcrumb.Item>
                </Breadcrumb>

                <Jumbotron>
                    <h2>Teams page <Badge variant="secondary">{teamsList.length}</Badge></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa, sapiente voluptatum? Quisquam, labore ipsam accusamus sint at eos nostrum natus velit ut quae? Veniam dolorum harum commodi eum natus explicabo.</p>
                </Jumbotron>

                <Nav style={{fontSize: 20}} variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">Add a team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">List of teams</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="search">
                        Search for teams
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Form.Group md="4" className="m-3">
                    <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="Search for a team"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    </InputGroup>
                </Form.Group>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamsList.map(team => (
                            <tr key={team.id}>
                                <td>{team.id}</td>
                                <td>{team.name}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button onClick={this.handleEdit} variant="outline-primary">Edit</Button>
                                        <Button onClick={this.handleDelete} variant="outline-danger">Delete</Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                
            </React.Fragment>
         );
    }
}
 
export default Teams;