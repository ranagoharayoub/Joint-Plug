import React from 'react'
import './BusinessDetail.css'
function BusinessDetail({active}) {
    return (
        <div className="details-cont" style={active==='detail' ? { display: 'flex'}: {display:'none'}}>
            <div className="detail-sect">
                <div className="detail-sect-left">
                    <p className="section-details-left">
                        <i class="fas fa-map-marker-alt"></i>&#9;Washington DC 20001<br></br>
                        <i class="fas fa-phone-alt"></i>&#9;5712064443<br></br>
                        <i class="far fa-clock"></i>&#9;Open (Show More) Sun 9am - 10pm<br></br>
                    </p>
                </div>
                <div className="detail-sect-right">
                    <p className="details-head"><i class="fas fa-comments"></i>&#9;About</p>
                    <p section-details-right>Joint Plug is a collective of young minds who love sharing their appreciation for the finer things with their inner circle.We pride ourselves on quality products and service and enjoy the rewarding pleasure of connecting people with their specific needs. Reach out to Us and we will deliver your gifts to your convenient location. Thank you for giving us the chance!</p>
                    <p className="details-head"><i class="fas fa-bars"></i>&#9;Amenities</p>
                    <p section-details-right>
                        1. Online ordering<br></br>
                        2. Recreational<br></br>
                        3. 21+ Only<br></br>
                        4. Discount for Veterans<br></br>
                        5. Terminal Patient Discount<br></br>
                    </p>
                    <p className="details-head"><i class="fas fa-map-marker-alt"></i>&#9;Find Us On</p>
                    <p className="details-head"><i class="fab fa-facebook-f"></i>&#9;FaceBook</p>
                    <p className="details-head"><i class="fab fa-instagram"></i>&#9;Instagram</p>
                    <p className="details-head"><i class="fab fa-twitter"></i>&#9;Twitter</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessDetail
