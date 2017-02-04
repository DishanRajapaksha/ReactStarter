import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}

// HMR Version Two
// if (module.hot) {
//   module.hot.accept();
// }
