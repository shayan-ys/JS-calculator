import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import { CalculatorBox } from './containers/CalculatorBox';

const useStyles = makeStyles(theme => ({
    appsLink: {
        position: "absolute",
        left: 25
    },
}));

const App: React.FC = () => {
    const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
          <Button href="/" variant="contained" color="primary" className={classes.appsLink}>
              &#65308; <Hidden xsDown>Back to Apps</Hidden>
          </Button>
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
              <b><a href="http://app.shayanys.com" style={{color: "white", textDecoration: "none"}}>ShayanYs</a></b>
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
