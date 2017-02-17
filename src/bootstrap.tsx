import 'fetch';
import 'es5-shim';
import 'es6-shim';
import 'es7-shim/browser';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import config from './config';
import mockup from './mockup';

ReactDOM.render(
  <App config={config} />,
  document.getElementById('app')
);
