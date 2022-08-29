import { Typography } from '@ornikar/kitt';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWeb from './App.web';
import AppNative from './App.native';

ReactDOM.render(
  <Typography.div base="body">
    <AppWeb />
    {/* <AppNative /> */}
  </Typography.div>,
  document.getElementById('root'),
);
