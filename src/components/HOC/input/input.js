import React from 'react';

export default (props) => {
    return <input
        placeholder = {props.msg}
        onBlur={(e) => props.handleChange(e.target.value)}
    />
}