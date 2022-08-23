import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const cardsWithSources = [
  {src: "./images/Lola-and-I.png"},
  {src: "./images/lola-biting-chair.png"}
]

//  test comment

function App() {
  const [cards, setCards] = useState(cardsWithSources);

  return (
    <div className="App">
      <h1>Lola's Memory Game</h1>
      <div className="board">
        {cards.map(card => (
          <div>
            <Card />
            <img src={card.src} alt='' width="500" height="600"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
