import React, { useState } from 'react';
import data from './people';
import './app.css';

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h1>5 birthdays today</h1>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

const Person = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default App;
