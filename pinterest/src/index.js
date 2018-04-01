import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

window.addEventListener('load', () => {
  const container = window.document.querySelector('#app');

  ReactDOM.render(
    <Routes />,
    container,
  );
});
