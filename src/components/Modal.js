import React from 'react'

function Modal() {
  return (
    <div className="modal-container open">
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered # of questions correctly!</p>
        <button className="close-btn">Play again</button>
      </div>
  </div>
  )
}

export default Modal
