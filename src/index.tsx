import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import System from './System';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <System />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:
// https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md
// @deprecated https://bit.ly/CRA-PWA
serviceWorker.unregister();
