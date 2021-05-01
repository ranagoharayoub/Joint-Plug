import React from 'react'
import ProdCard from '../Components/ProdCard'
import './HomePage.css'

function HomePage() {
    return (
        <div className='home-cont'>
            <div className='vid-div'>
                <video  className='vid' src='/videos/homeVideo.mp4' controls></video>
                <div className='over-vid'>
                    <div className='vid-tab'>
                        <p>Joint Plug</p>
                    </div>
                    <div className='vid-search'>
                        <div className='find'>
                            <p>Find</p>
                        </div>
                        <div className='learn'>
                            <p>Learn</p>
                        </div>
                    </div>
                </div>
                <p className='disc'>Discover Trusted Marijuana Businesse in Your Communinty</p>
            </div>
            <div className='marijuana'>
                <p>Marijuana Dispensaries, Delivery And Doctors In Washington 2001</p>
            </div>
            <div>
                <p className='new-to'>New to JointPlug?</p>
                <p className='our-state'>Our state of the art e-commerce for Merujuana delivery is built on peer to peer voting system, vetting both businesses and customers. Tracking system allows you to identify what stage your order is on. Securtiy is key for both our vendors and customers so we strictly enforce proper vetting.</p>
            </div>
            <div className='home-prod'>
                <div className='our-prod'>
                    <p>OUR PRODUCTS</p>
                </div>
                <div className='home-cards'>
                    <div className='home-cards-sec'>
                        <ProdCard></ProdCard>
                        <ProdCard></ProdCard>
                        <ProdCard></ProdCard>
                    </div>
                    <div className='browse-sec'>
                         <button className='browse-btn'>Browse More</button>
                    </div>
                </div>
            </div>
            <div className='home-prod'>
                <div className='our-prod'>
                    <p>NEWS & EVENTS</p>
                </div>
                <div className='home-cards'>
                    <div className='home-cards-sec'>
                        <ProdCard></ProdCard>
                        <ProdCard></ProdCard>
                        <ProdCard></ProdCard>
                    </div>
                    <div className='browse-sec'>
                         <button className='browse-btn'>Browse More</button>
                    </div>
                </div>
            </div>
            <div className='back-img'>
                <div className='let-box'>
                    <p className='let'>Let Us Know If you have any Questions!</p>
                </div>
                <div className='input-fields'>
                    <form>
                        <div style={{display:'flex', justifyContent:'space-between', margin:'20px 0px'}}>
                            <input className='name-input' placeholder='Name'></input>
                            <input className='phone-input' placeholder='Phone-Number'></input>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', margin:'20px 0px'}}>
                            <input className='name-input' placeholder='E-mail Adress'></input>
                            <input className='phone-input' placeholder='Location'></input>
                        </div>
                        <div>
                            <textarea className='text-area' placeholder='Message'></textarea>
                        </div>
                    </form>
                    <button className='submit-btn'>Submit</button>
                </div>
                {/* <div className='submit-btn-box'>
                    <button className='submit-btn'>Submit</button>
                </div>     */}
            </div>
        </div>
    )
}

export default HomePage
