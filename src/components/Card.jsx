import React from 'react'
import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {


  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img 
          className='front' 
          src={card.src} 
          alt='card front'
        />
        <img 
          className='back' 
          src="./images/lola-card-back-side.png" 
          alt='card back'
          onClick={disabled ? "" : () => handleChoice(card)}
        />
      </div>
    </div>
  )
}
