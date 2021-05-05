import React from 'react';

const { v4: uuidv4 } = require('uuid');

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) => {
    
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, { message: textInput, id: uuidv4() }]);
        setTextInput('');
    }
    return (
        <form onSubmit={submitTweetHandler}>
            <textarea onChange={userInputHandler} value={textInput} cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>
    )
}

export default CreateTweet;