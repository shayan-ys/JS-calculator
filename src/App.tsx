import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Calculator } from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <Calculator title="Simple Calculator" />
      </header>
    </div>
  );
}

export default App;
