import React, { useState } from 'react'
import './MobSlider.css'
import { Link } from 'react-router-dom'
function MobSlider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='mob-slider'>
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

export default MobSlider
