import React from 'react';

import {Breadcrumb} from 'react-bootstrap';

const BCrumb = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>
                Components
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{props.name}</Breadcrumb.Item>
        </Breadcrumb>
    );
} 

export default BCrumb;