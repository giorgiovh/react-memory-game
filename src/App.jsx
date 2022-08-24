import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const cardsWithSources = [
  { "src": "./images/Lola-and-I.png" },
  { "src": "./images/lola-biting-chair.png" },
  { "src": "./images/lola-close-up.png" },
  { "src": "./images/Lola-in-couch.png" },
  { "src": "./images/Lola-on-Laptop.png" },
  { "src": "./images/Lola-on-plants.png" },
]

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardsWithSources, ...cardsWithSources]
      .sort(() => Math.random() - .5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const checkIfMatch = (choiceOne, choiceTwo) => {
    choiceOne.src === choiceTwo.src ? alert("Match!") : alert("Not a match")
  }

  const handleClick = (card) => {
    if (!choiceOne) {
      setChoiceOne(card);
    } else if (!choiceTwo) {
      setChoiceTwo(card)
    }
  }

  useEffect(() => {
    console.log(choiceOne, choiceTwo);
    if (choiceOne && choiceTwo) {
      checkIfMatch(choiceOne, choiceTwo)
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Lola's Memory Game</h1>
      <div className="board">
        {cards.map(card => (
          <Card card={card} handleClick={handleClick} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
