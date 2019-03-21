import React from 'react';
import validator from 'validator';

const errorMessage = (field, value) => {
    let errorMessage = '';
    if(field === 'jiraKey'){
        return validator.isEmpty(''+value.jiraKey)? '* Jira KEY should not be empty!.': '';
    }else if(field === 'title'){
        return !validator.isLength(value.title, {min: 3})? '* Title should have at least 3 chars!.': '';
    }else if(field === 'storyPoint'){
        return validator.isEmpty(''+value.storyPoint)? '* Story point should not be empty!.': '';
    }else if(field === 'priority'){
        return validator.isEmpty(''+value.priority)? '* Priority should not be empty!.': '';
    }else if(field === 'storyState'){
        return validator.isEmpty(value.storyState)? '* Story state should not be empty!.': '';
    }
    return errorMessage;
}

const isValid = (value) => {
    return !(!validator.isEmpty(''+value.jiraKey) 
            && validator.isLength(value.title, {min: 3})
            && !validator.isEmpty(''+value.storyPoint)
            && !validator.isEmpty(''+value.priority)
            && !validator.isEmpty(value.storyState));
}

const StoryValidation = (props) => {
    const {field, value} = props;

    return (
        <label className="text">{errorMessage(field, value)}</label>
    );
}

export {StoryValidation, isValid};