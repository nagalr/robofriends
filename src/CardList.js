// CardList Component is a parent of Card
import React from 'react';
import Card from './Card';


// The 'key' inside the 'Card' component relates to tracing changes od Cards (like deleting a Card)
// and minimizing the Virtual-DOM activity, usually, it's a unique figure per Card, hence, using id

const CardList = ({ robots }) => {
    const CardArray = robots.map ((name, index) => {
        return (
            <Card
                key={robots[index].id}
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email}
            />
        );
    });
    return (
        <div>
            {CardArray}
        </div>

    );
};

export default CardList;

/*
Another way to write this:

const CardList = ({ robots}) => {
    return (
        <div>
        {
            robots.map ((name, index) => {
                return (
                    <Card
                        key={robots.index.id}
                        id={robots[index].id}
                        name={robots[index].name}
                        email={robots[index].email}
                     />
        );
        })
        }
        </div>
    )
} (Lecture 207)
 */



