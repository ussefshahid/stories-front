import React from 'react';
import {Button, Form, InputGroup, Modal} from 'react-bootstrap';
import {TeamValidation, isValid} from './TeamValidation';

const TeamModalUpdate = (props) => {
    const {UPDATE, updateTeam, showModalUpdate, handleSaveEdit, handleClose, handleOnChangeUpdate} = props;

    return (
        <Modal show={showModalUpdate} onHide={() => handleClose(UPDATE)}>
            <Modal.Header closeButton>
                <Modal.Title>Update team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group md="4" className="m-3">
                    <Form.Label>Team name: </Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            onChange={handleOnChangeUpdate}
                            defaultValue={updateTeam.name}
                            aria-describedby="inputGroupPrepend11"
                            required />
                    </InputGroup>
                    <InputGroup>
                        <TeamValidation field="name" value={updateTeam} />
                    </InputGroup>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(UPDATE)}>
                    Close
                </Button>
                <Button variant="primary" disabled={isValid(updateTeam)} onClick={() => handleSaveEdit(updateTeam)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const TeamModalAdd = (props) => {
    const {showModalAdd, addedTeam, handleSaveAdd, handleClose, handleOnChangeAdd} = props;

    return (
        <Modal show={showModalAdd} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group md="4" className="m-3">
                    <Form.Label>Team name: </Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            onChange={handleOnChangeAdd}
                            aria-describedby="inputGroupPrepend2"
                            required />
                    </InputGroup>

                    <InputGroup>
                        <TeamValidation field="name" value={addedTeam} />
                    </InputGroup>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" disabled={isValid(addedTeam)} onClick={handleSaveAdd}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export {TeamModalUpdate, TeamModalAdd};