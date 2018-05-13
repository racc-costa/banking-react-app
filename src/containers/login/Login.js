import React, { Component } from 'react';
import './Login.css';
import { Button, TextField, FormControlLabel, Checkbox } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import PageTitle from '../../components/PageTitle';

class Login extends Component {

    render() {
        return (
            <div>
                <PageTitle title="Personal Banking Login" subtitle="Enter your account number and password" />
                <FormControl noValidate autoComplete="off">
                    <div className="line"></div>
                    <TextField required label="Account number" type="Number" />
                    <div className="line"></div>
                    <TextField required label="Password" type="password" />
                    <div className="line"></div>
                    <Button variant="raised" color="primary">
                        Access my account
                    </Button>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary" />
                        }
                        label="Remember me"
                    />
                </FormControl>
            </div>
        )
    }
}

export default Login;