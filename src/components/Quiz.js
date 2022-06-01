import React, {useState} from 'react';
import Score from './Score';
import Button from './Button'

function Quiz({questions}) {
  // current question is used as index to select a question from the questions array
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // destructure the question properties to display using the currentQuestion index value
  const { correct_answer, incorrect_answers} = questions[currentQuestion]

  const handleNextQuestion = () => {
    if(currentQuestion < questions.length) {
      setCurrentQuestion(prevState => prevState + 1)
    } else {
      setCurrentQuestion(0)
    }
  }

  const handleAnswer = (e) => {
    console.log("Running")
    console.log(e.target.children[1])
  }


  return (
    <section className="quiz">
      <Score questions={questions} currentQuestion={currentQuestion}/>

      <article className="container">
        <h2 dangerouslySetInnerHTML={{__html: questions[currentQuestion].question}}/>
          <div className="btn-container">
            {/* change order of buttons */}
            <Button answer={correct_answer} prefix="A" handleAnswer={handleAnswer}/>
            <Button answer={incorrect_answers[0]} prefix="B" onClick={handleAnswer}/>
            <Button answer={incorrect_answers[1]} prefix="C" onClick={handleAnswer}/>
            <Button answer={incorrect_answers[2]} prefix="D" onClick={handleAnswer}/>
          </div>
      </article>
    <button className="next-question" onClick={handleNextQuestion}>next question</button>
  </section>
  )
}

export default Quiz
