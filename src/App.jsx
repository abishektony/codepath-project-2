import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
    category: "Easy"
  },
  {
    question: "Who developed the theory of relativity?",
    answer: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    category: "Hard"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    category: "Medium"
  },
  {
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
    image: "https://biomedicalodyssey.blogs.hopkinsmedicine.org/files/2019/10/anatomical-structure-animal-cell-GettyImages-514218370.jpg",
    category: "Medium"
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    image: "https://cdn.britannica.com/51/173051-131-1ECD9C16/gold-metal-Stacks-bars-Blocks-money-mercantilism.jpg",
    category: "Medium"
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    category: "Hard"
  }
];

const colors = {
  Easy: "#4CAF50",
  Medium: "#FFA500",
  Hard: "#FF4500",
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setFlipped(false);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Easy: "#4CAF50",
      Medium: "#FFA500",
      Hard: "#FF4500",
      Biology: "#2196F3",
      Chemistry: "#673AB7",
      Art: "#E91E63"
    };
    return colors[category] || "#333";
  };

  return (
    <div className="flashcard-container">
      <h1>Flashcard Quiz</h1>
      <p>Total Cards: {flashcards.length}</p>
      <p>Click the card to flip, click next to see a new card!</p>

      <div className="card-wrapper" onClick={handleCardClick}>
        <div
          className={`flashcard ${flipped ? "flipped" : ""}`}
          style={{ borderColor: getCategoryColor(flashcards[currentIndex].category) }}
        >
          <div className="card-front">
            <img src={flashcards[currentIndex].image} alt="Flashcard Visual" className="card-image" />
            <p>
              {flashcards[currentIndex].question}
            </p>
          </div>
          <div className="card-back">
            <p className="card-category" style={{ backgroundColor: getCategoryColor(flashcards[currentIndex].category) }}>
              {flashcards[currentIndex].answer}
            </p>
          </div>
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default App
