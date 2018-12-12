import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // TODO: Not sure if this basename is doing anything
  <BrowserRouter basename={process.env.PUBLIC_URL}>
<App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
