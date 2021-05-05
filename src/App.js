import React, {useState} from 'react';
import './App.css';
import TweetList from './components/TweetList';
import CreateTweet from './components/createTweet';

function App() {
  const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Alfredo Martinez")
  
  
  return (
    <div>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList setName={setName} name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;
