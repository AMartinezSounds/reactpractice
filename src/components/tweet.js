import React from 'react';

const Tweet = ({name, tweet, tweets, setTweets}) => {
    const deleteTweet = () => {
        setTweets(tweets.filter(state => state.id !== tweet.id))
    }
    return (
        <div className="tweet">
            <h2>{name}</h2>
            <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>delete</button>
            <button>like</button>
        </div>
        
    )
}

export default Tweet;