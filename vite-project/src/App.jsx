import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const App = () => {
  const myName = "Kavyadharshini S M";
  const myAge = 20;
  React.useEffect(() => {
    alert("Hi");
    console.log(`My age is ${myAge}`);
  }, []);

  return (
    <div className="name-container">
      {myName}
    </div>
  );
};

export default App;