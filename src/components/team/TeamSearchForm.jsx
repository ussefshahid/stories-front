import React from 'react';
import {Form, InputGroup} from 'react-bootstrap';

const TeamSearchForm = (props) => {
    const {handleSearchChange} = props;

    return (
        <Form.Group md="4" className="m-3">
            <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                type="text"
                placeholder="Search for a team"
                onChange={handleSearchChange}
                aria-describedby="inputGroupPrepend"
                required
            />
            </InputGroup>
        </Form.Group>
    );
}

export default TeamSearchForm;