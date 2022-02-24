import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/global';
import Fonts from './styles/fonts';
ReactDOM.render(
  <>
  <GlobalStyles />
  <Fonts />
  <App />
  </>,
  document.getElementById('root')
);
