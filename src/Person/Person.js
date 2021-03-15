import React from 'react';

const person = (props) => {
    return (
            <div>
              <h3 onClick={props.click}> Je suis {props.name} j'ai {props.age} ans </h3>
              <p> {props.children}</p>
              <input onChange={props.changed} value={props.name}/>
            </div>
    )
};

export default person;
