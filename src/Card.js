// must import 'React' in order to use JSX, the HTML-like code
import React from 'react';

const Card = ({ name,id, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;

/*
few comments:
we can only return one thing from Component, here, it's the <div> (we cannot add more)

The styling of the Cards will be inline here, using tachyons elements
(After the 'className' there are built-in tachyons elements, like in bootstrap)
if the styling is big, we can add CSS file (Card.css)
the { props } are in brackets since it's js code
without the brackets, it will show 'props.name' as-is
The img src=.. is like that:
we replaced the " sign with ` (template string) to wrap the url
we wrapped the url with {} since it's a javascript expression
robohash.org/randomText - can produce random robot (from the api)
we replaced the static random text with 'props.id' (different for each robot)
so every robot will have a unique robot picture, $ - for the value
{} - since it's js expression
?200x200 - the size of the robot as defined in the api

we could start (line before the return) with:
const { name, email, id} = props;
So, the values of name, email, id - will be taken from props,
and instead of writing 'props.name' we can write 'name' only,
same for email and id, wherever they appear.

Another thing that we can do: (destructuring)
Instead of: const Card = (props) => { ..
We can write: const Card = ({ name, email, id }) => {...
we receiving props and destructuring the props in the brackets -
the values that the function receives.
(appears in Lecture number 205)
and use the same: 'name', 'email', 'id' as in the code above.
 */