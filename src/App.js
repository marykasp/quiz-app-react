import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Quiz from './components/Quiz';

const API_URL = 'https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple';


function App() {
  // set state
  const [questions, setQuestions] = useState([]);


  // call to fetch questions
  useEffect(() => {
    // name async function
    const getQuestions = async() => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuestions(data.results)
    };

    getQuestions();

  }, [])


  return (
    <div className="App">
      <main>
        <Modal />
        {/* display quiz component if there are questions in the array, show loading when fetching */}
        {questions.length > 0 ? <Quiz questions={questions} /> : <h1>Loading...</h1>}
    </main>
    </div>
  );
}

export default App;
