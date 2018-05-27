import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './AppMenu.css';

class AppMenu extends Component {

    render() {

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Your Bank!
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppMenu;