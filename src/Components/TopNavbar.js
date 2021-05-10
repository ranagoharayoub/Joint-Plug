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
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/'><button  style={{background:'transparent'}}>Home</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/join'><button  style={{background:'transparent'}}>Join</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/login'><button  style={{background:'transparent'}}>Login</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/contactus'><button  style={{background:'transparent'}}>Contact Us</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/blog'><button  style={{background:'transparent'}}>Blog</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/news'><button  style={{background:'transparent'}}>News</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/addbusiness'><button  style={{background:'transparent'}}>Add Business</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)} to='/business'><button  style={{background:'transparent'}}>Business</button></Link>
                    <Link className='menu-btn' onClick={()=> setstate(false)}><button style={{background:'transparent'}} >Close</button></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
