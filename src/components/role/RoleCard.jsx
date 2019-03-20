import React from 'react';
import {Card, Button} from 'react-bootstrap';

const RoleCard = (props) => {
    const {role, handleDelete, handleEdit} = props;

    return (
        <Card bg="light" style={{ width: '18rem' }} className="m-2">
            <Card.Header><label className="floatRight">ID° {role.id}</label></Card.Header>
            <Card.Body>
                <Card.Title className="centerIt cardTitle"> {role.name}</Card.Title>
                <hr/>
                <Button onClick={() => handleEdit(role)} variant="outline-primary">Edit</Button>
                <Button className="floatRight" onClick={() => handleDelete(role.id)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default RoleCard;