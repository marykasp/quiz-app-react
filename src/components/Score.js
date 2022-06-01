import React from 'react'

function Score({questions}) {
  return (
    <div className="head-display">
      <div className="head-question-num">
        <p className="head-prefix">Question</p>
        <h4 className="head-main-text" id="questionCounter">1 / {questions.length}</h4>
        <div className="progress-bar">
          <div className="progress-bar-full" style={{width: "40%"}}></div>
        </div>
      </div>
      <div className="head-score">
        <p className="head-prefix">Score</p>
        <h4 className="head-main-text">0</h4>
      </div>
    </div>
  )
}

export default Score
