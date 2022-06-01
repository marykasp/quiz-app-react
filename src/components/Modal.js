import React from 'react'

function Modal({score, questionsLength, handlePlayAgain}) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>{score >= 3 ? "Congrats" : "Losers"}</h2>
        <p>You answered {score} of {questionsLength} questions correctly!</p>
        <button className="close-btn" onClick={handlePlayAgain}>Play again</button>
      </div>
  </div>
  )
}

export default Modal
