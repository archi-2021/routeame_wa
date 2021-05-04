import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './providers/user-provider';

import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);