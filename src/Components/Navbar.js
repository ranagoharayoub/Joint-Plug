import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-cont'>
            <div className='upper-nav'>
                <p className='login-register'>Login / Register</p>
            </div>
            <div className='lower-nav'>
                <div className='left-nav'>
                    <p>MENU</p>
                    <p>LOCATIONS</p>
                    <p>CONTACT-US</p>
                </div>
                <div className='center-nav'>
                    <img src='/img/logo.png' alt='logo'></img>
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
