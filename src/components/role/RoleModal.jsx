import React from 'react';
import {Button, Form, InputGroup, Modal} from 'react-bootstrap';

const RoleModalUpdate = (props) => {
    const {UPDATE, updateRole, showModalUpdate, handleSaveEdit, handleClose, handleOnChangeUpdate} = props;

    return (
        <Modal show={showModalUpdate} onHide={() => handleClose(UPDATE)}>
            <Modal.Header closeButton>
                <Modal.Title>Update role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group md="4" className="m-3">
                    <Form.Label>Role name: </Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            onChange={handleOnChangeUpdate}
                            defaultValue={updateRole.name}
                            aria-describedby="inputGroupPrepend11"
                            required />
                    </InputGroup>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(UPDATE)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveEdit(updateRole)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const RoleModalAdd = (props) => {
    const {showModalAdd, handleSaveAdd, handleClose, handleOnChangeAdd} = props;

    return (
        <Modal show={showModalAdd} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group md="4" className="m-3">
                    <Form.Label>Role name: </Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            onChange={handleOnChangeAdd}
                            aria-describedby="inputGroupPrepend2"
                            required />
                    </InputGroup>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveAdd}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export {RoleModalUpdate, RoleModalAdd};
