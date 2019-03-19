import React from 'react';
import {Card, Button} from 'react-bootstrap';

const StoryCard = (props) => {
    const {story, handleDelete, handleEdit} = props;

    return (
        <Card bg="light" key={story.jiraKey} style={{ width: '18rem' }} className="m-2">
            <Card.Header>Story ID: {story.jiraKey}</Card.Header>
            <Card.Body>
                <Card.Title className="centerIt cardTitle"> {story.title}</Card.Title>
                <Card.Text>
                    <React.Fragment>
                        <label>Story point: </label>
                        <strong  className="floatRight"> {story.storyPoint}</strong>
                    </React.Fragment> <br/>
                    <React.Fragment>
                        <label>Story priority: </label>
                        <strong  className="floatRight"> {story.priority}</strong>
                    </React.Fragment> <br/>
                    <React.Fragment>
                        <label>Story state: </label>
                        <strong  className="floatRight"> {story.storyState}</strong>
                    </React.Fragment>
                </Card.Text>
                <hr/>
                <Button onClick={() => handleEdit(story)} variant="outline-primary">Edit</Button>
                <Button className="floatRight" onClick={() => handleDelete(story.jiraKey)} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default StoryCard;