import React from 'react';
import {Card, Button} from 'react-bootstrap';

const RoleCard = (props) => {
    const {role, handleDelete, handleEdit} = props;

    return (
        <Card bg="light" key={role.id} style={{ width: '18rem' }} className="m-2">
            <Card.Header>Role ID: {role.id}</Card.Header>
            <Card.Body>
                <Card.Title className="centerIt cardTitle"> {role.name}</Card.Title>
                <hr/>
                <Button onClick={() => handleEdit(role)} variant="outline-primary">Edit</Button>
                <Button style={{float: 'right'}} onClick={() => handleDelete(role.id)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default RoleCard;