import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  // Function to log user details
  const logUserDetails = () => {
    alert("Hi");
    const userDetails = {
      name: "Kavyadharshini S M",
      dept: "M.Tech cse",
      rollNo: "8"
    };
    console.log("User Details:", userDetails);
  };

  // Function to log the current date
  const logCurrentDate = () => {
    alert("Hi");
    const today = new Date().toLocaleDateString();
    console.log("Current Date:", today);
  };

  // Function to log a random goal
  const logGoal = () => {
    alert("Hi");
    const Goal = [
      "To lead a happy life!"
    ];
    const randomGoal = Goal[Math.floor(Math.random() * Goal.length)];
    console.log("Goal:", randomGoal);
  };

  return (
    <div className="container">
      <h1>Click the buttons to log details in the console</h1>
      <button onClick={logUserDetails}>Log User Details</button>
      <button onClick={logCurrentDate}>Log Current Date</button>
      <button onClick={logGoal}>Log Goals</button>
    </div>
  );
}

export default App;
 