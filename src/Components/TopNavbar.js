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
            <div className= {state?'slider':'hide'}>
                <div className='slider-btn'>
                    <Link className='menu-btn' to='/'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>Home</button></Link>
                    <Link className='menu-btn' to='/join'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>Join</button></Link>
                    <Link className='menu-btn' to='/login'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>Login</button></Link>
                    <Link className='menu-btn' to='/contactus'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>Contact-us</button></Link>
                    <Link className='menu-btn' to='/blog'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>Blog</button></Link>
                    <Link className='menu-btn' to='/news'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>News</button></Link>
                    <Link className='menu-btn' to='/addbusiness'><button onClick={()=> setstate(false)} style={{background:'transparent'}}>Business</button></Link>
                    <Link className='menu-btn'><button style={{background:'transparent'}} onClick={()=> setstate(false)}>Close</button></Link>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
