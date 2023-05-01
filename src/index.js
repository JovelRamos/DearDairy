import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './components/components-styles.css';
import './global-styles.css';
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);