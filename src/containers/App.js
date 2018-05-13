import React, { Component } from 'react';
import './App.css';
import Login from '../containers/login/Login';
import Home from '../containers/home/Home';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import { IconButton } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Your Bank!
                        </Typography>
                    </Toolbar>
                </AppBar>
                <p></p>
                <div id="appContent">
                    <Login />
                    <p></p>
                    <Home />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
