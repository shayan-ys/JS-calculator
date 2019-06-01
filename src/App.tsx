import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';

import { CalculatorBox } from './containers/CalculatorBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
         <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
          <Grid item className="App-header-container">
            <b>ReactJS</b>
          </Grid>
          <Grid item className="App-logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
          <Grid item className="App-header-container">
            <b>ShayanYs</b>
          </Grid>
        </Grid>
      </header>
      <div>
        <CalculatorBox />
      </div>
    </div>
  );
};

export default App;
