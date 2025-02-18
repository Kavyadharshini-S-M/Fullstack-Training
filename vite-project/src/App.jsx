import React from 'react';
import './App.css';

const NotificationButton = ({ label }) => {
  const handleClick = () => alert("Button has been activated!");
  const handleDoubleClick = () => alert("Double activation detected!");

  return <button onClick={handleClick} onDoubleClick={handleDoubleClick}>{label}</button>;
};

const ProfileCard = ({ person }) => {
  return (
    <div className="profile-card">
      <h3>Meet {person.name}!</h3>
      <p>Age: {person.age}</p>
      <p>Favorite Activity: {person.hobby}</p>
    </div>
  );
};

const MainApp = () => {
  const user = { name: "Harini", age: 20, hobby: "Sketching" };
  const companion = { name: "Kavyadharshini", age: 19, hobby: "Singing" };

  return (
    <div className="app-container">
      <h1>Friendship Circle</h1>
      <p>"A bond that lasts a lifetime!"</p>
      <NotificationButton label="Press Me!" />
      <ProfileCard person={user} />
      <ProfileCard person={companion} />
    </div>
  );
};

export default MainApp;
