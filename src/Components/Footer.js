import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-cont' id='footer'>
            <div className='left-footer'>

            </div>
            <div className='right-footer'>
                <div className='footer-flex'>
                    <div className='about-col'>
                        <p style={{fontFamily:'Bebas Neue', fontSize:'31px', fontWeight:'500', lineHeight: '34px', margin:'50px 0px'}}>COMPANY</p>
                        <p>Blog</p>
                        <p>Our Menu</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='user-col'>
                        <p style={{fontFamily:'Bebas Neue', fontSize:'31px', fontWeight:'500', lineHeight: '34px', margin:'50px 0px'}}>USERS</p>
                        <p>Login</p>
                        <p>Register</p>
                        <p>Add Your Business</p>
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
