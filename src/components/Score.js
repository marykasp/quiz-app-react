import React from 'react'

function Score({questionsLength, currentQuestion, score}) {

  const widthValue = () => {
    const total = (currentQuestion / questionsLength)
    if(total < 0.2) {
      return "20%"
    } else if(currentQuestion < 0.4) {
      return "40%"
    } else if(currentQuestion < 0.6) {
      return "60%"
    } else if(currentQuestion < 0.8) {
      return "80%"
    } else {
      return "100%";
    }
  }

  return (
    <div className="head-display">
      <div className="head-question-num">
        <p className="head-prefix">Question</p>
        <h4 className="head-main-text" id="questionCounter">{currentQuestion + 1} / {questionsLength}</h4>
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
