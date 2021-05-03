import React from 'react'
import ProdCard from '../Components/ProdCard'
import './Menu.css'
function Menu() {
    return (
        <div className='menu'>
            <div className='title'>
                MENU
            </div>
            <div className='menu-cards'>
                <ProdCard></ProdCard>
                <ProdCard></ProdCard>
                <ProdCard></ProdCard>
            </div>
            <div className='menu-cards'>
                <ProdCard></ProdCard>
                <ProdCard></ProdCard>
                <ProdCard></ProdCard>
            </div>
        </div>    
    )
}

export default Menu
