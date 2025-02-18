import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const AlertButton = ({ message }) => {
  return (
    <button
      onClick={() => alert("Button clicked!")}
      onDoubleClick={() => alert("Double Click detected!")}
    >
      {message}
    </button>
  );
};

const FriendDetails = ({ name, age }) => {
  return (
    <div>
      <h2>Friend Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const App = () => {
  const myDetails = { name: "Harini", age: 19 };
  const friendDetails = { name: "Kavyadharshini", age: 20 };

  return (
    <div>
      <h1>Best Friends Forever</h1>
      <p>"Through thick and thin, always together!"</p>
      <AlertButton message="Press Me!" />
      <FriendDetails name={myDetails.name} age={myDetails.age} />
      <FriendDetails name={friendDetails.name} age={friendDetails.age} />
    </div>
  );
};

export default App;
