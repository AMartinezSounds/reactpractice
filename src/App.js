import './App.css';
import Tweet from './components/tweet';
import CreateTweet from './components/createTweet';

function App() {
  const name = "Alfredo Martinez";
  const message = "I think optical compressors sounds more musical than FET compressors"
  return (
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet/>
      <Tweet name={name} message={message}/>
    </div>
  );
}

export default App;
