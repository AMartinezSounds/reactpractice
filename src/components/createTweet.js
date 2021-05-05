import React, {useState} from 'react';

const CreateTweet = () => {
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput])
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