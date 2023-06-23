import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import Layover from './components/Layover';
import Card from './components/Card';
import './App.css';
function App() {
  const [data, setData] = useState([
    {
      name: "Atib",
      age: "20",
    }
  ]);
  const [showLayover, setShowLayover] = useState(false);
  const [layoverMessage, setLayoverMessage] = useState('');

  function submitHandler(data1) {
    if (!data1 || !data1.username || data1.username.trim() === '') {
      setLayoverMessage('Name is not given.');
      setShowLayover(true);
    } else if (!data1.age || data1.age.trim() === '') {
      setLayoverMessage('Age is not given.');
      setShowLayover(true);
    } else if (isNaN(data1.age)) {
      setLayoverMessage('Invalid age. Please enter a number.');
      setShowLayover(true);
    } else {
      setData(prevData => [...prevData, { name: data1.username, age: data1.age }]);
    }
  }

  function closeLayover() {
    setShowLayover(false);
    setLayoverMessage('');
  }

  return (
    <div className="App">
      <Form submitHandler={submitHandler} />
      <Card>
      {data.map((item, i) => (
        <List name={item.name} age={item.age} key={i} />
      ))}
      {showLayover && <Layover message={layoverMessage} closeLayover={closeLayover} />}
      </Card>
    </div>
  );
}

export default App;
