import React, { useState, useEffect } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function Clock() {
  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    setSeconds((seconds) => seconds + 1);
  }

  useEffect(() => {
    setInterval(tick, 1000);
  }, []);

  return (
    <div className="clock">
      {seconds}
    </div>
  )
}

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  // ---------------------------------------

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <div className="final-results">
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
