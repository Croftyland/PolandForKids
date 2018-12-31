import React from 'react';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.css";
import "./stylesheets/Main.css";
import "./scss/app.scss";
import App from './components/App';
// import Quiz from './components/States/Quiz';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './components/registerServiceWorker.js';

const rootEl = document.getElementById('root');
const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );

render(App);
// render(Quiz);
if (module.hot) module.hot.accept('./components/App', () => render(App));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

