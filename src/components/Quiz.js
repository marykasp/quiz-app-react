import React from 'react';
import Score from './Score';
import Button from './Button'

function Quiz({ questions, handleAnswer, currentQuestion, score }) {
  // destructure the question properties to display using the currentQuestion index value - correct_answer is a string, incorrect_answers is an array
  const { correct_answer, incorrect_answers} = questions[currentQuestion];
  // put the answers and the incorrect answers in an array
  let shuffledAnswers = [correct_answer, ...incorrect_answers];
  // shuffle the answers in the array before displaying
  shuffledAnswers = shuffledAnswers.sort(() => Math.random() - 0.5)
  const prefix = ["A", "B", "C", "D"]


  return (
    <section className="quiz">
      <Score
        questionsLength={questions.length}
        currentQuestion={currentQuestion}
        score={score}
      />

      <article className="container">
        <h2 dangerouslySetInnerHTML={{__html: questions[currentQuestion].question}}/>
          <div className="btn-container">
            {/* use randomized shuffledArray to display the answers */}
            {shuffledAnswers.map((answer) => {
              return (
                <Button
                  answer={answer}
                  prefix={prefix.shift()}
                  handleAnswer={handleAnswer}
                />
              )
            })}
          </div>
      </article>
    {/* <button className="next-question" onClick={handleNextQuestion}>next question</button> */}
  </section>
  )
}

export default Quiz
