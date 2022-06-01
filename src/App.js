import Game from './components/Game';
import './App.css';
import { useState } from 'react';

function App() {
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = () => {
    setStartGame(true)
  }

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      {}
      <button style={{display: startGame ? "none" : "block"}} onClick={handleStartGame} className="start-btn">Start Quiz</button>
      {startGame ? (<Game />) : ""}
    </div>
  )

}

export default App;
