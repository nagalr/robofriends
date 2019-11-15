// CardList Component is a parent of Card
import React from 'react';
import Card from './Card';
//import {robots} from "./robots";

const CardList = ({ robots }) => {
    const CardArray = robots.map ((name, index) => {
        return (
            <Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
        );
    });
    return (
        <div>
            {CardArray}
        </div>

    );
}

export default CardList;

