import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

import SimpleReactLighbox from "simple-react-lightbox"
import App from './App'

ReactDOM.render(
  <SimpleReactLighbox>
    <Router>
      <App />
    </Router>
  </SimpleReactLighbox>,
  
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
