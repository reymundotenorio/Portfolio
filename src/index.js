import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Intro from './Intro';
import Projects from './Projects';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Intro />, document.getElementById('root'));
ReactDOM.render(<Projects />, document.getElementById('projects'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
