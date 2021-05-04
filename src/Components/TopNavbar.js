import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <img onClick={()=> setstate(!state)} className='bar' src='/img/menu.png' alt='search'></img>
            <div className={state?'slider':'hide'}>
                
                <div className='slider-btn'>
                    <Link className='menu-btn' to='/join'><button>Join</button></Link>
                    <Link className='menu-btn' to='/login'><button >Login</button></Link>
                    <Link className='menu-btn' to='/contactus'><button >Contact-us</button></Link>
                    <Link className='menu-btn' to='/blog'><button >Blog</button></Link>
                    <Link className='menu-btn' to='/news'><button >News</button></Link>
                    <Link className='menu-btn' to='/business'><button >Business</button></Link>
                    <Link className='menu-btn'><button  onClick={()=> setstate(false)}>Close</button></Link>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
