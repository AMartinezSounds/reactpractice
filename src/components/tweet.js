import React from 'react';

const Tweet = ({name, message}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{message}</h3>
            <button>delete</button>
            <button>like</button>
        </div>
        
    )
}

export default Tweet;