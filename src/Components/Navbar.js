import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
   const [isOpen, setOpen] = useState(false)

    return (
        <div className='nav-cont'>
            <div className='upper-nav'>
               <p className='login-register' ><Link to='/login' style={{textDecoration:'none', color:'inherit'}}>Login / Register</Link></p>
            </div>
            <div className='lower-nav hide-on-mobile'>
                <div className='left-nav'>
                    <p>MENU</p>
                    <p>LOCATIONS</p>
                    <p><Link to='/contactus' style={{textDecoration:'none'}}>CONTACT-US</Link></p>
                </div>
                <div className='center-nav'>
                    <Link to='/'><img src='/img/logo.png' alt='logo' /></Link>
                </div>
                <div className='right-nav'>
                    <p>BLOG</p>
                    <p>NEWS</p>
                    <p>ADD YOUR BUSINESS</p>
                </div>
            </div>
            <div className='lower-nav hide-on-big' style={{
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Link to='/'><img src='/img/logo.png' alt='logo' width={"200px"}/></Link>
                <button onClick={()=>{
                    setOpen(!isOpen)
                }}>Menu</button>
            </div>
            <div id={"mobileMenu"}
                 className={isOpen? "showNav" : "hideNav"}
                 style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                height: "100%",
                width: "50%",
                zIndex: 100000,
                background: "white"
            }}>
                <button style={{fontStyle: "italic", fontWeight: "bold", marginBottom: 100, background: "black"}} onClick={()=>{
                    setOpen(!isOpen)
                }}>Close Menu</button>
                <button>Link here</button>
                <button>Link here</button>
                <button>Link here</button>
                <button>Link here</button>
                <button>Link here</button>

            </div>
        </div>
    )
}

export default Navbar
