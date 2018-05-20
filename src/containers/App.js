import React, { Component } from 'react';
import './App.css';
import Login from '../containers/login/Login';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import { IconButton } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { indigo } from 'material-ui/colors';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../containers/home/Home';

const theme = createMuiTheme({
    palette: {
        primary: indigo
    }
})

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
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
                            <Switch>
                                <Route path="/" exact component={Login} />
                                <Route path="/home" exact component={Home} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;