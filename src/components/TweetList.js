import React from 'react';
import Tweet from '../components/tweet';

const TweetList = ({name, tweets, setTweets}) => {
    return (
        <div className="tweet-list">
            {tweets.map(tweet => (
                <Tweet key={tweet.id} name={name} tweet={tweet} tweets={tweets} setTweets={setTweets}/>
            ))}
        </div>
        
    )
}

export default TweetList;