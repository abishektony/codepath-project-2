import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
  { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
  { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
  { question: "What is the chemical symbol for gold?", answer: "Au" },
  { question: "What is the speed of light in vacuum?", answer: "299,792,458 m/s" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "What is the square root of 64?", answer: "8" },
  { question: "Which gas do plants use for photosynthesis?", answer: "Carbon Dioxide (CO2)" }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
  };

  return (
    <>
      <div className="flashcard-container">
        <h1>Flashcard Quiz</h1>
        <p>Total Cards: {flashcards.length}</p>
        <p>Click the card to flip, click next to see a new card!</p>
        
        <div className="flashcard" onClick={handleCardClick}>
          <p>{showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}</p>
        </div>
        
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </>
  )
}

export default App
