import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from './Badge';

function App() {
  const [count, setCount]= useState(0);

  useEffect(()=>{
    setInterval(()=>setCount(s=>s+1),1000);
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Badge count={count}/>
      </header>
    </div>
  );
}

export default App;
