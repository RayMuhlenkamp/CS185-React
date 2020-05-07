import React from 'react';
import './css/App.css';
import Routes from './Routes';
const firebase = require('firebase');

function App() {
  return (
    <div className="Background">
        <div className="App">
          <Routes/>
        </div>
    </div>
  );
}

export default App;
