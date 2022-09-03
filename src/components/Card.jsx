import React from 'react'
import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {


  return (
    <div className={flipped ? "flipped" : ""}>
      <img 
        className='front' 
        src={card.src} alt='' 
        width="500" 
        height="600"
        style={flipped ? {} : {display: "none"}}
      />
      <img 
        className='back' 
        src="./images/lola-card-back-side.png" 
        alt='' 
        width="500" 
        height="600" 
        onClick={disabled ? () => {} : () => handleChoice(card)}
        style={flipped ? {display: "none"} : {}}
      />
    </div>
  )
}
