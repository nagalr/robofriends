// CardList Component is a parent of Card
import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { // we destructuring 'robots' for function usage
    const CardComponent = robots.map((user,index) => { // using 'map' to loop over robot.js (can use forEach as well)
        return (  // map always need to return
            <Card id={robots[index].id} name={robots[index]} email={robots[index].email}> </Card>
        );
    })
    return (
      <div>
          {CardComponent}
      </div>
    );
}

export default CardList;

