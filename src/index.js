import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { deepPurple } from 'material-ui/colors';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        primary: deepPurple
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)

registerServiceWorker();