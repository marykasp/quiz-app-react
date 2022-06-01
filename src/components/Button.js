import React from 'react'

function Button({answer, prefix, handleAnswer}) {


  return (
    <button className="choice-container" onClick={handleAnswer}>
      <div className="choice-prefix">{prefix}</div>
      <p className="answer-btn">{answer}</p>
    </button>

  )
}

export default Button
