import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
   
    return (
        <div className='nav-cont'>
            <div className='upper-nav'>
               <p className='login-register' ><Link to='join' style={{textDecoration:'none', color:'inherit'}}>Login / Register</Link></p>
            </div>
            <div className='lower-nav'>
                <div className='left-nav'>
                    <p>MENU</p>
                    <p>LOCATIONS</p>
                    <p><Link to='/contactus' style={{textDecoration:'none'}}>CONTACT-US</Link></p>
                </div>
                <div className='center-nav'>
                    <Link to='/'><img src='/img/logo.png' alt='logo'></img></Link>
                </div>
                <div className='right-nav'>
                    <p>BLOG</p>
                    <p>NEWS</p>
                    <p>ADD YOUR BUSINESS</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
