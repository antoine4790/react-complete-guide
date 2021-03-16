import React from 'react';
//import css géré par Webpack
import './Person.css';

const person = (props) => {
    return (
            <div className="Person">
              <h3 onClick={props.click}> Je suis {props.name} j'ai {props.age} ans </h3>
              <p> {props.children}</p>
              <input onChange={props.changed} value={props.name}/>
            </div>
    )
};

export default person;
