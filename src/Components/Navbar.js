import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
   

    return (
        <div className='nav-cont'>
            <div className='upper-nav'>
               <p className='login-register' ><Link to='/login' style={{textDecoration:'none', color:'inherit'}}>Login / Register</Link></p>
            </div>
            <div className='lower-nav hide-on-mobile'>
                <div className='left-nav'>
                    <p><Link style={{textDecoration:'none', color:'inherit'}} to='/menu'>MENU</Link></p>
                    <p>LOCATIONS</p>
                    <p><Link to='/contactus' style={{textDecoration:'none', color:'inherit'}}>CONTACT-US</Link></p>
                </div>
                <div className='center-nav'>
                    <Link to='/'><img src='/img/logo.png' alt='logo' /></Link>
                </div>
                <div className='right-nav'>
                    <p><Link style={{textDecoration:'none', color:'inherit'}} to='/blog'>BLOG</Link></p>
                    <p><Link style={{textDecoration:'none', color:'inherit'}} to='/news'>NEWS</Link></p>
                    <p><Link style={{textDecoration:'none', color:'inherit'}} to='/addbusiness'>ADD YOUR BUSINESS</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Navbar
