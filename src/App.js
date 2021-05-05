import React, {useState} from 'react';
import './App.css';
import TweetList from './components/TweetList';
import CreateTweet from './components/createTweet';

function App() {
  const [name, setName] = useState("Alfredo Martinez")
  let message = "I think optical compressors sounds more musical than FET compressors";
  
  return (
    <div>
      <CreateTweet/>
      <TweetList setName={setName} name={name} message={message}/>
    </div>
  );
}

export default App;
