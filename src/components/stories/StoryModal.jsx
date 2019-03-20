import React from 'react';
import {Button, Form, Modal, InputGroup} from 'react-bootstrap';
import {StoryValidation, isValid} from './StoryValidation';

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
                    <InputGroup>
                        <StoryValidation field="jiraKey" value={updateStory} />
                    </InputGroup>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story title: </Form.Label>
                    <Form.Control type="text" name="title" onChange={handleOnChangeUpdate} value={updateStory.title} required />
                    <InputGroup>
                        <StoryValidation field="title" value={updateStory} />
                    </InputGroup>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story point: </Form.Label>
                    <Form.Control type="number" name="storyPoint" onChange={handleOnChangeUpdate} value={updateStory.storyPoint} required />
                    <InputGroup>
                        <StoryValidation field="storyPoint" value={updateStory} />
                    </InputGroup>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story priority: </Form.Label>
                    <Form.Control type="number" name="priority" onChange={handleOnChangeUpdate} value={updateStory.priority} required />
                    <InputGroup>
                        <StoryValidation field="priority" value={updateStory} />
                    </InputGroup>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story state: </Form.Label>
                    <Form.Control type="text" name="storyState" onChange={handleOnChangeUpdate} value={updateStory.storyState} required />
                    <InputGroup>
                        <StoryValidation field="storyState" value={updateStory} />
                    </InputGroup>
                </Form.Group>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" disabled={isValid(updateStory)} onClick={handleSaveEdit}>
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

const StoryModalDetails = (props) => {
    const {storyObj, showModalDetails, handleClose} = props;

    return (
        <Modal size="lg" show={showModalDetails} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Details Story</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Jira KEY: </Form.Label>
                    <Form.Control type="number" name="jiraKey" value={storyObj.jiraKey} disabled/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story title: </Form.Label>
                    <Form.Control type="text" name="title" value={storyObj.title} disabled/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story point: </Form.Label>
                    <Form.Control type="number" name="storyPoint" value={storyObj.storyPoint} disabled/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story priority: </Form.Label>
                    <Form.Control type="number" name="priority" value={storyObj.priority} disabled/>
                </Form.Group>

                <Form.Group md="4" className="m-3">
                    <Form.Label>Story state: </Form.Label>
                    <Form.Control type="text" name="storyState" value={storyObj.storyState} disabled/>
                </Form.Group>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export {StoryModalUpdate, StoryModalAdd, StoryModalDetails};