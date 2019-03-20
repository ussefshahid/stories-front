import React from 'react';
import {Row} from 'react-bootstrap';
import StoryCard from './StoryCard';

const ListStories = (props) => {
    const {storiesList, handleEdit, handleDelete, handleShowDetails} = props;

    return (
        <Row>
            {storiesList.map(story => (
                <StoryCard handleShowDetails={handleShowDetails} key={story.jiraKey} story={story} handleEdit={handleEdit} handleDelete={handleDelete} />
            ))}
        </Row>
);
}

export default ListStories;