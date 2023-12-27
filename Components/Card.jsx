import React from 'react'
import './Style/card.css'
function Card(prop) {
    const speakOnClick = ()=> prop.speakLoud();
    const deleteIt = (id)=> prop.deleteMe(id);
  return (
    <>
        <div className="card-item">

            <div className='sound-container' onClick={speakOnClick}>
            🔊
            </div>
            <div className='content-container'>
                {prop.content}
            </div>
            <div className='delete-container' onClick={()=> deleteIt(prop.id)}>
            ❌
            </div>
        </div>
    </>
  )
}

export default Card
