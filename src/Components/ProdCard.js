import React from 'react'
import './ProdCard.css'

function ProdCard() {
    return (
        <div className='prod-card-cont'>
            <img src='/img/marijuana.jpg' alt='marijuana'></img>
            <div className='card-text'>
                <p>Fresher</p>
                <p>Dispensary</p>
            </div>
        </div>
    )
}

export default ProdCard
