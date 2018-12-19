import React from 'react';
import ReactDOM from 'react-dom'
import "./stylesheets/index.css";
import "./stylesheets/Main.css"
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from './components/registerServiceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

