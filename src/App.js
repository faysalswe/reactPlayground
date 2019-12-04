import React from 'react';
import './App.css';
import faysal from './assets/faysal.png';
function App() {
  return (
    <div className="container">
      <img className="img-container" src={faysal} alt="faysal"/>
      <h1>Faysal Ahmmad</h1>
      <h3>I am a software engineer, professionally working on asp net core and angular stack.</h3>
       <h3> Also love deployment, automation.</h3>
    </div>
  );
}

export default App;
