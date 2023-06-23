import React from 'react';
import './List.css';

const List = (props) => {
  
  return (
    <div className="list-container">
      <h1 className="list-name">{props.name} ({props.age}) years old</h1>
    </div>
  );
};

export default List;
