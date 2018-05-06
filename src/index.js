import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        primary: red
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)

registerServiceWorker();
