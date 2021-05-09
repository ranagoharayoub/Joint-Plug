import React, { useState } from 'react'
import BusinessDeals from '../Components/BusinessDeals'
import BusinessDetail from '../Components/BusinessDetail'
import BusinessMenu from '../Components/BusinessMenu'
import BusinessReview from '../Components/BusinessReview'
import './Business.css'
function Business() {
    const [active, setactive] = useState('menu')
    return (
        <div className='business-cont'>
            <div className='bus-upper'>
                <div className="bus-back-button">
                    <a href="http://jointplug.com">
                        <i class="fas fa-chevron-left"></i>
                    <button className="bus-back-btn">Marijuana Delivery Services</button></a>
                </div>
                <div className="bus-image-rating">
                    <div className="bus-image">
                        <img className="business-img" src="/img/marijuana.jpg" alt="no"></img>
                    </div>
                    <div className="bus-rating">
                        <p className="business-para">Store One<br></br>
                            <i class="fas fa-truck"></i>&#9;Delivery<br></br>
                            
                            <i class="fas fa-phone-alt"></i>&#9;5712064443<br></br>
                            
                            <i class="fas fa-map-marker-alt"></i>&#9;Washington | DC</p>
                                
                    </div>
                </div>
                <div className="bus-tabs">
                    <button onClick={()=> setactive('menu')} className="bus-tab-1">Menu</button>
                    <button onClick={()=> setactive('detail')} className="bus-tab-2">Detail</button>
                    <button onClick={()=> setactive('deals')} className="bus-tab-2">Deals</button>
                    <button onClick={()=> setactive('review')} className="bus-tab-2">Reviews</button>
                    <button className="bus-tab-2">Photos</button>
                </div>
            </div>
            <div className='bus-lower'>
                <BusinessMenu active={active} ></BusinessMenu>
                <BusinessDetail active={active} ></BusinessDetail>
                <BusinessDeals active={active} ></BusinessDeals>
                <BusinessReview active={active}></BusinessReview>
            </div>
        </div>
    )
}

export default Business
