import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Intro';
import Project from './Project';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Intro />, document.getElementById('root'));
ReactDOM.render(<Project />, document.getElementById('projects'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
