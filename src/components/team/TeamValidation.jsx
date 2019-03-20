import React from 'react';
import validator from 'validator';

const errorMessage = (field, value) => {
    let errorMessage = '';
    if(field === 'name'){
        errorMessage += !validator.isLength(value.name, {min: 3})? '* name should have at least 3 chars!.': '';
    }
    return errorMessage;
}

const isValid = (value) => {
    return !validator.isLength(value.name, {min: 3});
}

const TeamValidation = (props) => {
    const {field, value} = props;

    return (
        <label className="text-danger">{errorMessage(field, value)}</label>
    );
}

export {TeamValidation, isValid};