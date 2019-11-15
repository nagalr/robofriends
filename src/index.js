import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CardList from "./CardList";
import 'tachyons';
// we use { robots } since we have few exports (from robots.js)
import { robots } from './robots';
import Card from './Card';

ReactDOM.render(
                <CardList robots={robots}/>
                //<CardList robots={robots}/> //CardList accepts robots as props
, document.getElementById('root'));

/*
 If you want your app to work offline and load faster, you can change
 unregister() to register() below. Note this comes with some pitfalls.
 Learn more about service workers: https://bit.ly/CRA-PWA
 The Default used to be register(),
 now it's unregister() - we will not use serviceWorker Until we want to.
*/
serviceWorker.unregister();
