import React from 'react';
import Tweet from '../components/tweet';

const TweetList = ({name, message, setName}) => {
    return (
        <div className="tweet-list">
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <button onClick={() => setName('Alfredo Martinez Canos')}>Click</button>
        </div>
        
    )
}

export default TweetList;