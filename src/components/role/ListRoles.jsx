import React from 'react';
import {Row} from 'react-bootstrap';
import RoleCard from './RoleCard';

const ListRoles = (props) => {
    const {rolesList, handleEdit, handleDelete} = props;

    return (
        <Row>
            {rolesList.map(role => (
                <RoleCard key={role.id} role={role} handleEdit={handleEdit} handleDelete={handleDelete} />
            ))}
        </Row>
    );
}

export default ListRoles;