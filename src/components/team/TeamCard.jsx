import React from 'react';
import {Card, Button} from 'react-bootstrap';

const TeamCard = (props) => {
    const {team, handleDelete, handleEdit} = props;

    return (
        <Card bg="light" key={team.id} style={{ width: '18rem' }} className="m-2">
            <Card.Header>Team ID: {team.id}</Card.Header>
            <Card.Body>
                Team name:
                <Card.Title> {team.name}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button onClick={() => handleEdit(team)} variant="outline-primary">Edit</Button>
                <Button style={{float: 'right'}} onClick={() => handleDelete(team.id)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;