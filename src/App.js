import React from 'react';
import logo from './logo.svg';
import './App.css';
import Generateur_QR from './form/Form.js';

function App() {
  return (
    <div className="main">
      <h1>Générateur de QR code</h1>
      <Generateur_QR/>
    </div>
  );
}

export default App;
