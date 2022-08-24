import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const cardsWithSources = [
  { "src": "./images/Lola-and-I.png", matched: false },
  { "src": "./images/lola-biting-chair.png", matched: false },
  { "src": "./images/lola-close-up.png", matched: false },
  { "src": "./images/Lola-in-couch.png", matched: false },
  { "src": "./images/Lola-on-Laptop.png", matched: false },
  { "src": "./images/Lola-on-plants.png", matched: false },
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
    return choiceOne.src === choiceTwo.src
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
      if (checkIfMatch(choiceOne, choiceTwo)) {
        setCards(prevCards => {
          return prevCards.map(card => {
            return card.src === choiceOne.src ? { ...card, matched: true } : { ...card }
          })
        })
      }
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Lola's Memory Game</h1>
      <div className="board">
        {cards.map(card => (
          <Card card={card} handleClick={handleClick} key={card.id} flipped={card === choiceOne || card === choiceTwo || card.matched}/>
        ))}
      </div>
    </div>
  );
}

export default App;
