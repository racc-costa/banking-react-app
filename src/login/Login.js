import React, { Component } from 'react';
import './Login.css';
import { Card, CardHeader, CardContent, CardActions, CardMedia, Button, TextField } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import login_new_client_bg from '../images/bank_new_client.jpg';

class Login extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader title="Login" />
          <FormControl noValidate autoComplete="off">
            <CardContent>
              <TextField required label="Account number" />
              <p></p>
              <TextField required label="Password" type="password" />
            </CardContent>
            <CardActions>
              <Button variant="raised" color="primary">
                Access my account
              </Button>
            </CardActions>
          </FormControl>
        </Card>
        <p></p>
        <Card>
          <CardHeader title="Not a Client yet? Create a new account" />
          <CardMedia image={login_new_client_bg} className="cardMedia">
          </CardMedia>
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
