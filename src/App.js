import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Quiz from './components/Quiz';
import Loader from './components/Loader'

const API_URL = 'https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple';


function App() {
  // set state
  const [questions, setQuestions] = useState([]);
  // current question is used as index to select a question from the questions array
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


   // name async function
   const getQuestions = async() => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.results)
    setQuestions(data.results)
  };

  // call to fetch questions
  useEffect(() => {
    getQuestions();

  }, [])

  const handleAnswer = (answer) => {
    // increment to the next question
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentQuestion)
    // check if answer matches correct_answer
    if(answer === questions[currentQuestion].correct_answer) {
      console.log("correct")
      // increment the show
      setScore(prevScore => prevScore + 1);
    }
  }

  const handlePlayAgain = () => {
    // reset score
    setScore(0)
    // fetch more questions
    getQuestions();
    // reset currentQuestion
    setCurrentQuestion(0)
  }

  return (
    <div className="App">
      <main>
        {questions.length > 0 ? (
          <>
            {currentQuestion >= questions.length ? (
              <Modal
                score={score}
                handlePlayAgain={handlePlayAgain}
                questionsLength={questions.length}
              />
            ) : (
              <Quiz
                questions={questions}
                currentQuestion={currentQuestion}
                score={score}
                handleAnswer={handleAnswer}
              />
            )}
          </>
        ) : (<Loader />)}
      </main>3
    </div>
  )

}

export default App;
