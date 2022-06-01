import './App.css';

function App() {
  return (
    <div className="App">
      <main>
      <div class="modal-container open">
        <div class="modal-content">
          <h2>Congrats!</h2>
          <p>You answered # of questions correctly!</p>
          <button class="close-btn">Play again</button>
        </div>
      </div>
      <section class="quiz">
        <div class="head-display">
          <div class="head-question-num">
            <p class="head-prefix">Question</p>
            <h4 class="head-main-text" id="questionCounter">1 / 5</h4>
            <div class="progress-bar">
              <div class="progress-bar-full" style={{width: "40%"}}></div>
            </div>
          </div>
          <div class="head-score">
            <p class="head-prefix">Score</p>
            <h4 class="head-main-text">0</h4>
          </div>
        </div>
        <article class="container">
          <h2>Question</h2>
          <div class="btn-container">
            <div class="choice-container">
              <div class="choice-prefix">A</div>
              <button class="answer-btn">Answer 1</button>
            </div>
            <div class="choice-container">
              <div class="choice-prefix">B</div>
              <button class="answer-btn">Answer 2</button>
            </div>
            <div class="choice-container">
              <div class="choice-prefix">C</div>
              <button class="answer-btn">Answer 3</button>
            </div>
            <div class="choice-container">
              <div class="choice-prefix">D</div>
              <button class="answer-btn">Answer 4</button>
            </div>
          </div>
        </article>
        <button class="next-question">next question</button>
      </section>
    </main>
    </div>
  );
}

export default App;
