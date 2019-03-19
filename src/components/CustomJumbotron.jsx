import React from 'react';
import {Jumbotron, Badge} from 'react-bootstrap';

const CustomJumbotron = (props) => {
    const {name, length} = props;

    return (
        <Jumbotron>
            <h2>{name} page <Badge variant="secondary">{length}</Badge></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, sapiente voluptatum? Quisquam, labore ipsam accusamus sint at eos nostrum natus velit ut quae? Veniam dolorum harum commodi eum natus explicabo.</p>
        </Jumbotron>
    );
}

export default CustomJumbotron;