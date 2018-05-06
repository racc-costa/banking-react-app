import React, { Component } from 'react';
import './Login.css';
import { Card, CardHeader, CardContent, CardActions, Button, TextField } from 'material-ui';
import { FormControl } from 'material-ui/Form';

class Login extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <CardHeader title="Login" />
            <FormControl noValidate autoComplete="off">
              <TextField required label="Account number" />
              <TextField required label="Password" type="password" />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button variant="raised" color="primary">
              Access my account
            </Button>
          </CardActions>
        </Card>
        <p></p>
        <Card>
          <CardContent>
            <CardHeader title="Create a new account" />
          </CardContent>
          <CardActions>
            <Button variant="raised" color="primary">
              Create a new account
            </Button>
          </CardActions>
        </Card>
      </div>

    )
  }
}

export default Login;
