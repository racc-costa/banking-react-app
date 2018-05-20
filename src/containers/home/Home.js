import React, { Component } from 'react';
import PageTitle from '../../components/PageTitle';
import Balance from '../../components/balance/Balance';
import { Button } from 'material-ui';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                <PageTitle title="Welcome Ricardo" />
                <Balance />
                <p></p>
                <Link to={{
                    pathname: '/', hash: ''
                }
                }>
                    <Button variant="raised" color="primary">
                        Login
                    </Button>
                </Link>
            </div>
        )
    }
}

export default Home;