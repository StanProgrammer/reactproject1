import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.submitHandler({ username, age });
    setUsername('');
    setAge('');
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit" name="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
