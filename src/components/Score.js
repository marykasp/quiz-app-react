import React from 'react'

function Score({questions, currentQuestion, score}) {

  const widthValue = () => {
    if(currentQuestion  === 0) {
      return "20%"
    } else if(currentQuestion === 1) {
      return "40%"
    } else if(currentQuestion === 2) {
      return "60%"
    } else if(currentQuestion === 3) {
      return "80%"
    } else {
      return "100%";
    }
  }

  return (
    <div className="head-display">
      <div className="head-question-num">
        <p className="head-prefix">Question</p>
        <h4 className="head-main-text" id="questionCounter">{currentQuestion + 1} / {questions.length}</h4>
        <div className="progress-bar">
          <div className="progress-bar-full" style={{width: widthValue()}}></div>
        </div>
      </div>
      <div className="head-score">
        <p className="head-prefix">Score</p>
        <h4 className="head-main-text">{score}</h4>
      </div>
    </div>
  )
}

export default Score
