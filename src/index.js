import { Typography } from '@ornikar/kitt-universal';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWeb from './App.web';
import AppNative from './App.native';

// TODO explain
const App = AppWeb;

// TODO explain
// const App = AppNative;

ReactDOM.render(
  <Typography.div base="body">
    <App />
  </Typography.div>,
  document.getElementById('root'),
);
