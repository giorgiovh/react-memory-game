import React from 'react'

export default function Card({ card, handleClick, flipped }) {


  return (
    <div className={flipped ? "flipped" : ""}>
      <img className='front' src={card.src} alt='' width="500" height="600"/>
      <img className='back' src="./images/lola-card-back-side.png" alt='' width="500" height="600" onClick={() => handleClick(card)}/>
    </div>
  )
}
