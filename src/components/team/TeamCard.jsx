import React from 'react';
import {Card, Button} from 'react-bootstrap';

const TeamCard = (props) => {
    const {team, handleDelete, handleEdit} = props;

    return (
        <Card bg="light" key={team.id} style={{ width: '18rem' }} className="m-2">
            <Card.Header><label className="floatRight">ID° {team.id}</label></Card.Header>
            <Card.Body>
                <Card.Title className="centerIt cardTitle"> {team.name}</Card.Title>
                <hr/>
                <Button onClick={() => handleEdit(team)} variant="outline-primary">Edit</Button>
                <Button className="floatRight" onClick={() => handleDelete(team.id)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;