import React from 'react'
import './BusinessPhoto.css'
function BusinessPhoto({active}) {
    return (
        <div className="photos-cont" style={active==='photos' ? {display:'flex'} : {display:'none'}}>
            <img className="photos-img" src="/img/marijuana.jpg" alt="no network"></img>
        </div>
    )
}

export default BusinessPhoto
