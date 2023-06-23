import React from 'react';
import './Layover.css';

function Layover({ message, closeLayover }) {
  return (
    <div className="layover">
      <div className="layover-content">
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={closeLayover}>Close</button>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Layover;
