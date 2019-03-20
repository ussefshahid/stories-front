import React from 'react';
import {Row} from 'react-bootstrap';
import TeamCard from './TeamCard';

const ListTeams = (props) => {
    const {teamsList, handleEdit, handleDelete} = props;

    return (
        <Row>
            {teamsList.map(team => (
                <TeamCard key={team.id} team={team} handleEdit={handleEdit} handleDelete={handleDelete} />
            ))}
        </Row>
    );
}

export default ListTeams;