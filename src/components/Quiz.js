import React from 'react';
import Score from './Score';

function Quiz({questions}) {
  return (
    <section className="quiz">
      <Score questions={questions}/>

      <article className="container">
          {/* Iterate over the questions state */}
        {questions.map(question => {
          return (
            <>
              <h2 dangerouslySetInnerHTML={{__html: question.question}}/>
              <div className="btn-container">
                <div className="choice-container">
                  <div className="choice-prefix">A</div>
                  <button className="answer-btn">{question.correct_answer}</button>
                </div>
                <div className="choice-container">
                  <div className="choice-prefix">B</div>
                  <button className="answer-btn">{question.incorrect_answers[0]}</button>
                </div>
                <div className="choice-container">
                  <div className="choice-prefix">C</div>
                  <button className="answer-btn">{question.incorrect_answers[1]}</button>
                </div>
                <div className="choice-container">
                  <div className="choice-prefix">D</div>
                  <button className="answer-btn">{question.incorrect_answers[2]}</button>
                </div>
              </div>
            </>
          )
        })}
      </article>
    <button className="next-question">next question</button>
  </section>
  )
}

export default Quiz
