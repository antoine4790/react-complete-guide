import React from 'react';

const person = (props) => {
    return (
            <div>
            <h3> Je suis {props.name} j'ai {props.age} ans </h3>
            <p> {props.children}</p>
            </div>
    )
};

export default person;
