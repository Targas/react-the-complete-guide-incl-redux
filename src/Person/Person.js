import React from 'react';
import './../App.css';

const person = ( props ) => {
  return (
    <div className="person">
      <h1>Meu nome é {props.name} e tenho {props.age} anos</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default person;