import React, { Component} from 'react';
import CardList from "./CardList";
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component{
    constructor () {
        super ()
        this.state = {
            robots: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then (response => response.json())
            .then (users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    };

    render ()
    {
        const filteredrobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredrobots}/>
                </Scroll>
            </div>
        );
    };
}

export default App;














