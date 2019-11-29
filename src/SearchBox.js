import React from 'react';

const searchBox = ({ searchChange }) => {
    return (
        <div className='p2'>
            <input
                className='pa3 ba b--green hover-bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange = { searchChange }
            />
        </div>
    );
};

export default searchBox;



