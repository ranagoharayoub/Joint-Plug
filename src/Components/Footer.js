import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-cont' id='footer'>
            <div className='left-footer'>
            </div>
            <div className='right-footer'>
                <div className='footer-flex'>
                    <div className='about-col'>
                        <p style={{fontFamily:'Bebas Neue', fontSize:'31px', fontWeight:'500', lineHeight: '34px', margin:'0px 0px'}}>COMPANY</p>
                        <Link style={{textDecoration:'none', color:'inherit'}} to='/blog'><p>Blog</p></Link>
                        <Link style={{textDecoration:'none', color:'inherit'}} to='/menu'><p>Our Menu</p></Link>
                        <Link style={{textDecoration:'none', color:'inherit'}} to='/contactus'><p>Contact Us</p></Link>
                    </div>
                    <div className='user-col'>
                        <p style={{fontFamily:'Bebas Neue', fontSize:'31px', fontWeight:'500', lineHeight: '34px', margin:'0px 0px', }}>USERS</p>
                        <Link style={{textDecoration:'none', color:'inherit'}} to='/login'><p>Login</p></Link>
                        <Link style={{textDecoration:'none', color:'inherit'}} to='/join'><p>Register</p></Link>
                        <Link style={{textDecoration:'none', color:'inherit'}} to='/addbusiness'><p>Add Your Business</p></Link>
                    </div>
                </div>
                <div className='social-contact'>
                    <img src='/Icons/twitter.svg' alt='twitter' style={{height: '32px'}}></img>
                    <img src='/Icons/fb.png' alt='fb' style={{height: '32px'}}></img>
                    <img src='/Icons/in.png' alt='linkedin' style={{height: '32px'}}></img>
                    <img src='/Icons/google.png' alt='google' style={{height: '32px'}}></img>
                </div>
                <div className='address'>
                    <p>111, Tower A1, Loremlpsume Park, Gurugram India</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
