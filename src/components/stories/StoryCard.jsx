import React from 'react';
import {Card, Button} from 'react-bootstrap';

const StoryCard = (props) => {
    const {story, handleDelete, handleEdit, handleShowDetails} = props;

    return (
        <Card bg="light" key={story.jiraKey} style={{ width: '18rem' }} className="m-2">
            <Card.Header><label className="floatRight">ID° {story.jiraKey}</label></Card.Header>
            <Card.Body>
                <Card.Title className="centerIt cardTitle"> {story.title}</Card.Title>
                <hr/>
                <Button onClick={() => handleEdit(story)} variant="outline-primary">Edit</Button>
                <Button onClick={() => handleShowDetails(story)} style={{marginLeft: 24}} variant="outline-warning">Details</Button>
                <Button className="floatRight" onClick={() => handleDelete(story.jiraKey)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default StoryCard;