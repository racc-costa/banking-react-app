import React, { Component } from 'react';
import PageTitle from '../../components/PageTitle';
import Balance from '../../components/balance/Balance';

class Home extends Component {

    render() {
        return (
            <div>
                <PageTitle title="Welcome Ricardo" />
                <Balance />
            </div>
        )
    }
}

export default Home;
