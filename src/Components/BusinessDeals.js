import React from 'react'
import './BusinessDeals.css'
function BusinessDeals({active}) {
    return (
        <div className="deals-cont" style={active==='deals' ? {display:'flex'} : {display:'none'}}>
            <div className="deals-box">
                <h2 className="deal">Deal Box</h2>
                <img src="/img/jack.png" alt="deal box"></img>
                <div className="deal-btm-box">
                    <p className="btm-txt">
                        New Flavour
                    </p>
                </div>
                <div className="detail-box">
                    <div className="detail-left">Flower</div>
                    <div className="detail-center">Both</div>
                    <div className="detail-right">2096</div>
                </div>
            </div>
        </div>
    )
}

export default BusinessDeals
