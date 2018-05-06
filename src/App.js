import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Welcome to Your Bank!
          </Typography>
          </Toolbar>
        </AppBar>
        <p></p>
        <div className="appContent">
          <Login />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
