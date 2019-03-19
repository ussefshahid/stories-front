import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const StoryModalUpdate = (props) => {
    const {updateStory, showModalUpdate, handleSaveEdit, handleClose, handleOnChangeUpdate} = props;

    return (
        <Modal size="lg" show={showModalUpdate} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update story</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group md="4" className="m-3">
                    <Form.Label>Jira KEY: </Form.Label>
                    <Form.Control type="number" name="jiraKey" onChange={handleOnChangeUpdate} value={updateStory.jiraKey} required />
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story title: </Form.Label>
                    <Form.Control type="text" name="title" onChange={handleOnChangeUpdate} value={updateStory.title} required />
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story point: </Form.Label>
                    <Form.Control type="number" name="storyPoint" onChange={handleOnChangeUpdate} value={updateStory.storyPoint} required />
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story priority: </Form.Label>
                    <Form.Control type="number" name="priority" onChange={handleOnChangeUpdate} value={updateStory.priority} required />
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story state: </Form.Label>
                    <Form.Control type="text" name="storyState" onChange={handleOnChangeUpdate} value={updateStory.storyState} required />
                </Form.Group>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveEdit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const StoryModalAdd = (props) => {
    const {showModalAdd, handleSaveAdd, handleClose, handleOnChangeAdd} = props;

    return (
        <Modal size="lg" show={showModalAdd} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Story</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Jira KEY: </Form.Label>
                    <Form.Control type="number" name="jiraKey" onChange={handleOnChangeAdd} required/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story title: </Form.Label>
                    <Form.Control type="text" name="title" onChange={handleOnChangeAdd} required/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story point: </Form.Label>
                    <Form.Control type="number" name="storyPoint" onChange={handleOnChangeAdd} required/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story priority: </Form.Label>
                    <Form.Control type="number" name="priority" onChange={handleOnChangeAdd} required/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story state: </Form.Label>
                    <Form.Control type="text" name="storyState" onChange={handleOnChangeAdd} required/>
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

export {StoryModalUpdate, StoryModalAdd};