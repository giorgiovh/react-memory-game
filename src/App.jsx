import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const cardImages = [
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
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - .5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  const checkIfMatch = (choiceOne, choiceTwo) => {
    return choiceOne.src === choiceTwo.src
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare the two choices and if they match, set the matched property to true
  useEffect(() => {
    console.log(choiceOne, choiceTwo);
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (checkIfMatch(choiceOne, choiceTwo)) {
        setCards(prevCards => {
          return prevCards.map(card => {
            return card.src === choiceOne.src ? { ...card, matched: true } : { ...card }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => console.log(cards), [cards])

  return (
    <div className="App">
      <h1>Lola's Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="board">
        {cards.map(card => (
          <Card 
            card={card} 
            handleChoice={handleChoice} 
            key={card.id} 
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
