import React, { useState } from 'react'
import './TopNavbar.css'

function TopNavbar() {

    const [state, setstate] = useState(false)
    console.log(state)
    
    return (
        <div className='topnav'>
            <img  className='search' src='/img/white-search.jpg' alt='search'></img>
            <img className='location' src='/img/loc.png' alt='search'></img>
            <img className='cart' src='/img/shopping-cart.png' alt='search'></img>
            <img className='leave' src='/img/11-n.png' alt='search'></img>
            <img onClick={()=> setstate(true)} className='bar' src='/img/menu.png' alt='search'></img>
            <div className={state?'slider':'hide'}>
                
                <div className='slider-btn'>
                    <button>Join</button>
                    <button>Login</button>
                    <button>Contact-us</button>
                    <button>Blog</button>
                    <button>News</button>
                    <button>Business</button>
                    <button onClick={()=> setstate(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
