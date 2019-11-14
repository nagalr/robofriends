import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './Card';
import 'tachyons';
// we us { robots } since we have few exports (from robots.js)
import { robots } from './robots';

ReactDOM.render(
                /*
                 we can only return one element, so we wrap
                 few Card-Components in a <div>
                 we will add properties to each Card
                */
                <div>
                    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
                    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
                    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
                </div>

, document.getElementById('root'));

/*
 If you want your app to work offline and load faster, you can change
 unregister() to register() below. Note this comes with some pitfalls.
 Learn more about service workers: https://bit.ly/CRA-PWA
 The Default used to be register(),
 now it's unregister() - we will not use serviceWorker Until we want to.
*/
serviceWorker.unregister();
