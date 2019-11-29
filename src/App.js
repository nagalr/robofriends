import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import searchBox from './searchBox';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }
    render () {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <input type='search' placeholder='search robots' />
                <CardList robots={this.state.robots}/>
            </div>
        )
    }
}

export default App;

