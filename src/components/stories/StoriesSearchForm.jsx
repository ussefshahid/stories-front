import React from 'react';
import {Form, InputGroup} from 'react-bootstrap';

const StoriesSearchForm = (props) => {
    const {handleSearchChange} = props;

    return (
        <Form.Group md="4" className="m-3">
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend4">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text"
                    placeholder="Search for a story"
                    onChange={handleSearchChange}
                    aria-describedby="inputGroupPrepend4"
                    required
                />
                </InputGroup>
            </Form.Group>
    );
}

export default StoriesSearchForm;