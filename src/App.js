import React, { useState, useEffect } from 'react';
import './App.css';

function MagicButton() {
  return(
    <div> 
      <h3>This is a magic button</h3>
      <h2> Lets keep going!</h2>
      <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
