import { KittThemeProvider } from '@ornikar/kitt-universal';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWeb from './App.web';
import AppNative from './App.native';

// For React technical test, uncomment this next line
const App = AppWeb;

// For React-native technical test, uncomment this next line
// const App = AppNative;

ReactDOM.render(
  <KittThemeProvider>
    <App />
  </KittThemeProvider>,
  document.getElementById('root'),
);
