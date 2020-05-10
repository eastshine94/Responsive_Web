import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import {themes, GlobalStyle} from './styles';
import StoreProvider from './providers/StoreProvider';


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <ThemeProvider theme={themes}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.Fragment>
  , document.getElementById('root')
);


