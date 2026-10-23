
import { useState } from "react";
import "./index.css";
import questions from "./data/questions";

const weeks = Array.from({ length: 12 }, (_, i) => i + 1);

export default function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  function startQuiz(type) {
    let selectedQuestions = [];

    if (type === "Full Quiz") {
      selectedQuestions = [...questions];
    } else if (type === "Random Quiz") {
      selectedQuestions = [...questions].sort(
        () => Math.random() - 0.5
      );
    } else if (type.startsWith("Week ")) {
      const weekNumber = Number(type.replace("Week ", ""));
      selectedQuestions = questions.filter(
        (question) => question.week === weekNumber
      );
    }

    setSelectedQuiz(type);
    setQuizQuestions(selectedQuestions);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  }

  function selectAnswer(optionIndex) {
    const question = quizQuestions[currentIndex];

    if (selectedAnswers[question.id] !== undefined) {
      return;
    }

    setSelectedAnswers((previous) => ({
      ...previous,
      [question.id]: optionIndex,
    }));
  }

  function goHome() {
    setSelectedQuiz(null);
    setQuizQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  }

  const finishQuiz = () => setShowResults(true);

  const score = quizQuestions.reduce(
    (total, question) =>
      total +
      (selectedAnswers[question.id] === question.answer ? 1 : 0),
    0
  );

  const wrongQuestions = quizQuestions.filter(
    (question) =>
      selectedAnswers[question.id] !== undefined &&
      selectedAnswers[question.id] !== question.answer
  );

  const unansweredQuestions = quizQuestions.filter(
    (question) => selectedAnswers[question.id] === undefined
  );

  const percentage = quizQuestions.length
    ? Math.round((score / quizQuestions.length) * 100)
    : 0;

  // RESULTS SCREEN
  if (selectedQuiz && showResults) {
    return (
      <div className="app">
        <header className="navbar">
          <a
            className="brand"
            href="#"
            onClick={(event) => {
              event.preventDefault();
              goHome();
            }}
          >
            ROHITH<span>.</span>
          </a>

          <span className="nav-label">RESULTS</span>
        </header>

        <main className="quiz-screen results-screen">
          <p className="quiz-label">
            QUIZ COMPLETED · {selectedQuiz.toUpperCase()}
          </p>

          <h1 className="results-title">Your Results.</h1>

          <div className="result-score-row">
            <p className="quiz-score">
              {score}
              <span> / {quizQuestions.length}</span>
            </p>

            <div className="result-percent">{percentage}%</div>
          </div>

          <div className="result-stats">
            <div>
              <span className="stat-number correct-text">{score}</span>
              <span className="stat-label">Correct</span>
            </div>

            <div>
              <span className="stat-number wrong-text">
                {wrongQuestions.length}
              </span>
              <span className="stat-label">Incorrect</span>
            </div>

            <div>
              <span className="stat-number">
                {unansweredQuestions.length}
              </span>
              <span className="stat-label">Skipped</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="quiz-action" onClick={goHome}>
              ← Back to Home
            </button>

            <button
              className="quiz-action secondary"
              onClick={() => startQuiz(selectedQuiz)}
            >
              Try Again ↻
            </button>
          </div>

          {wrongQuestions.length > 0 && (
            <section className="review-section">
              <p className="quiz-label">LEARN FROM YOUR MISTAKES</p>
              <h2>
                Incorrect Answers<span>.</span>
              </h2>

              {wrongQuestions.map((question, index) => (
                <article className="review-card" key={question.id}>
                  <p className="review-number">
                    QUESTION {index + 1} · WEEK {question.week}
                  </p>

                  <h3>{question.question}</h3>

                  <div className="review-answer wrong-answer">
                    <span>Your answer</span>
                    <strong>
                      {question.options[selectedAnswers[question.id]]}
                    </strong>
                  </div>

                  <div className="review-answer correct-answer">
                    <span>Correct answer</span>
                    <strong>{question.options[question.answer]}</strong>
                  </div>
                </article>
              ))}
            </section>
          )}

          {unansweredQuestions.length > 0 && (
            <section className="review-section">
              <p className="quiz-label">NOT ATTEMPTED</p>
              <h2>Skipped Questions.</h2>

              {unansweredQuestions.map((question) => (
                <article className="review-card" key={question.id}>
                  <p className="review-number">WEEK {question.week}</p>
                  <h3>{question.question}</h3>

                  <div className="review-answer correct-answer">
                    <span>Correct answer</span>
                    <strong>{question.options[question.answer]}</strong>
                  </div>
                </article>
              ))}
            </section>
          )}

          {wrongQuestions.length === 0 &&
            unansweredQuestions.length === 0 && (
              <p className="perfect-message">
                Perfect run! You answered every question correctly.
              </p>
            )}
        </main>
      </div>
    );
  }

  // QUIZ SCREEN
  if (selectedQuiz && quizQuestions.length > 0) {
    const question = quizQuestions[currentIndex];
    const selectedOption = selectedAnswers[question.id];
    const answered = selectedOption !== undefined;

    return (
      <div className="app">
        <header className="navbar">
          <button className="quiz-back" onClick={goHome}>
            ← Home
          </button>

          <span className="nav-label">
            {selectedQuiz.toUpperCase()}
          </span>
        </header>

        <main className="quiz-screen">
          <div className="quiz-progress-heading">
            <span>QUESTION {currentIndex + 1}</span>
            <span>{quizQuestions.length} TOTAL</span>
          </div>

          <div className="quiz-progress">
            <div
              style={{
                width: `${((currentIndex + 1) / quizQuestions.length) * 100
                  }%`,
              }}
            />
          </div>

          <h1 className="question-heading">
            {question.question}
          </h1>

          <div className="answer-options">
            {question.options.map((option, index) => {
              const isCorrect = index === question.answer;
              const isSelected = selectedOption === index;

              let answerClass = "";

              if (answered && isCorrect) {
                answerClass = "answer-correct";
              } else if (answered && isSelected && !isCorrect) {
                answerClass = "answer-wrong";
              }

              return (
                <button
                  key={index}
                  className={`answer-option ${answerClass}`}
                  onClick={() => selectAnswer(index)}
                  disabled={answered}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option}

                  {answered && isCorrect && (
                    <strong className="answer-indicator">✓</strong>
                  )}

                  {answered && isSelected && !isCorrect && (
                    <strong className="answer-indicator">✕</strong>
                  )}
                </button>
              );
            })}
          </div>

          <div className="quiz-controls">
            <button
              className="quiz-action secondary"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((i) => i - 1)}
            >
              ← Previous
            </button>

            {currentIndex < quizQuestions.length - 1 ? (
              <button
                className="quiz-action"
                onClick={() => setCurrentIndex((i) => i + 1)}
              >
                Next →
              </button>
            ) : (
              <button className="quiz-action" onClick={finishQuiz}>
                Submit Quiz
              </button>
            )}
          </div>

          <p className="quiz-description">
            {!answered
              ? "Select one answer."
              : selectedOption === question.answer
                ? "Correct answer! Well done."
                : "Not quite. The correct answer is highlighted in green."}
          </p>
        </main>
      </div>
    );
  }

  // HOMEPAGE ONLY — FULL BACKGROUND PORTRAIT
  return (
    <div className="home-page">
      <div className="home-background" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpeg`}
          alt=""
        />
      </div>

      <div className="home-overlay" aria-hidden="true" />

      <div className="app home-content">
        <header className="navbar">

          <a className="brand" href="#" onClick={(event) => {
            event.preventDefault();
            goHome();
          }}>
            <img
              className="brand-logo"
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt=""
            />
            <span className="brand-name">
              ROHITH<span>.</span>
            </span>
          </a>


          <span className="nav-label">NPTEL</span>
        </header>

        <main>
          <section className="hero">
            <h1 className="hero-title">
              Conservation
              <br />
              Geography.
            </h1>

            <div className="quiz-cards">
              <button
                className="quiz-card"
                onClick={() => startQuiz("Full Quiz")}
              >
                <span className="card-number">01</span>
                <h2>Full Quiz</h2>
                <span className="card-arrow">❤️</span>
              </button>

              <button
                className="quiz-card"
                onClick={() => startQuiz("Random Quiz")}
              >
                <span className="card-number">02</span>
                <h2>Random Quiz</h2>
                <span className="card-arrow">❤️</span>
              </button>
            </div>
          </section>

          <section className="weeks-section">
            <div className="weeks-heading">
              <h2>
                Choose a week<span>.</span>
              </h2>
              <span>1 — 12</span>
            </div>

            <div className="week-grid">
              {weeks.map((week) => (
                <button
                  className="week-card"
                  key={week}
                  onClick={() => startQuiz(`Week ${week}`)}
                >
                  <span className="week-number">
                    {String(week).padStart(2, "0")}
                  </span>
                  <span className="week-title">Week {week}</span>
                  <span className="week-arrow">🐯</span>
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
