import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './App';

import './css/styles.css';
import './css/gradient.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
);
