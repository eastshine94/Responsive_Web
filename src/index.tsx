import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import {themes, GlobalStyle} from './styles';


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </React.Fragment>
  , document.getElementById('root')
);


