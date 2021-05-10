import React, { useState } from 'react'
import './BusinessMenu.css'

function BusinessMenu({active}) {
    const [price, setprice] = useState(0)
    return (
        <div className="body-div" style={active==='menu' ? { display: 'flex'}: {display:'none'}} >
            <div className="bus-left-right">
                    <div className="bus-left">
                        <div className="bus-cart">
                            <p>Your Cart<br></br></p>
                            <div className="bus-item-amount">
                                <div className="bus-item">
                                    <p>
                                        <i class="fas fa-shopping-cart"></i>&#9;0 items</p>
                                </div>
                                <div className="bus-amount">
                                    <p>${price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bus-search">
                            <i class="fas fa-search"></i>
                            <input className="bus-search-bar" type="text" placeholder="Type text to search"></input>
                        </div>
                        <div className="bus-options">
                            <select className="bus-sort" value="sort">
                                <option>Sort</option>
                                <option>Highest Price</option>
                                <option>Lowest Price</option>
                        </select>
                        </div>
                    </div>
                    <div className="bus-right">
                        <h2 className="prods">Products</h2>
                        <div className="bus-product">
                            <div className="bus-product-img"><img className="bus-product-photo" src="/img/indica.webp" alt="no connection"></img></div>
                            <div className="bus-product-detail">
                                <div className="bus-prod-heading">
                                    <h2 className="flavor">Forest Jack</h2>
                                </div>
                                <div className="bus-prod-list">
                                    <div onClick={() => setprice(price+30)} className="bus-product-weight">
                                    <p className="bus-g">$30</p>
                                    <p className="bus-g">g</p>
                                    </div>
                                    <div onClick={() => setprice(price+50)} className="bus-product-weight">
                                        <p className="bus-g">$50</p>
                                        <p className="bus-g">1/8oz</p>
                                    </div>
                                    <div onClick={() => setprice(price+80)}  className="bus-product-weight">
                                        <p className="bus-g">$80</p>
                                        <p className="bus-g">1/4oz</p>
                                    </div>
                                    <div onClick={() => setprice(price+150)}  className="bus-product-weight">
                                        <p className="bus-g">$150</p>
                                        <p className="bus-g">1/2oz</p>
                                    </div>
                                    <div onClick={() => setprice(price+260)}  className="bus-product-weight">
                                        <p className="bus-g">$260</p>
                                        <p className="bus-g">oz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bus-product">
                            <div className="bus-product-img"><img className="bus-product-photo" src="/img/indica.webp" alt="no connection"></img></div>
                            <div className="bus-product-detail">
                                <div className="bus-prod-heading"><h2 className="flavor">Forest Jack</h2></div>
                                <div className="bus-prod-list">
                                    <div onClick={() => setprice(price+30)}  className="bus-product-weight">
                                    <p className="bus-g">$30</p>
                                    <p className="bus-g">g</p>
                                </div>
                                <div onClick={() => setprice(price+50)}  className="bus-product-weight">
                                    <p className="bus-g">$50</p>
                                    <p className="bus-g">1/8oz</p>
                                </div>
                                <div onClick={() => setprice(price+80)}  className="bus-product-weight">
                                    <p className="bus-g">$80</p>
                                    <p className="bus-g">1/4oz</p>
                                </div>
                                <div onClick={() => setprice(price+180)}  className="bus-product-weight">
                                    <p className="bus-g">$150</p>
                                    <p className="bus-g">1/2oz</p>
                                </div>
                                <div onClick={() => setprice(price+260)}  className="bus-product-weight">
                                    <p className="bus-g">$260</p>
                                    <p className="bus-g">oz</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="bus-product">
                            <div className="bus-product-img"><img className="bus-product-photo" src="/img/indica.webp" alt="no connection"></img></div>
                            <div className="bus-product-detail">
                                <div className="bus-prod-heading"><h2 className="flavor">Get High</h2></div>
                                <div className="bus-prod-list">
                                    <div onClick={() => setprice(price+6.25)}  className="bus-product-weight">
                                    <p className="bus-g">$6.25</p>
                                    <p className="bus-g">g</p>
                                </div>
                                <div onClick={() => setprice(price+12.50)}  className="bus-product-weight">
                                    <p className="bus-g">$12.50</p>
                                    <p className="bus-g">1/8oz</p>
                                </div>
                                <div onClick={() => setprice(price+25)}  className="bus-product-weight">
                                    <p className="bus-g">$25</p>
                                    <p className="bus-g">1/4oz</p>
                                </div>
                                <div onClick={() => setprice(price+50)}  className="bus-product-weight">
                                    <p className="bus-g">$50</p>
                                    <p className="bus-g">1/2oz</p>
                                </div>
                                <div onClick={() => setprice(price+100)}  className="bus-product-weight">
                                    <p className="bus-g">$100</p>
                                    <p className="bus-g">oz</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BusinessMenu
