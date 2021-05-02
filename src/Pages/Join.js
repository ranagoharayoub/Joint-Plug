import React from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

function Join() {
    return (
        <div className="maindiv">
            <header>
                <h2>SIGN UP</h2>
            </header>
            <div className="combined">
                <div className="formblock">
                <form action="/signup">
                    <label for="username"className="username">Username</label><br></br>
                    <input className="userbox" type="text" placeholder="Enter Username" id="username" name="username"></input><br></br>
                    <label for="email"className="email">E-mail</label><br></br>
                    <input className="emailbox" type="email" placeholder="Enter E-mail" id="email" name="email"></input>
                    <label for="password"className="password">Password</label><br></br>
                    <input className="passwordbox" type="password" placeholder="Enter Password" id="password" name="password"></input><br></br>
                    <label for="password"className="password">Re-type Password</label><br></br>
                    <input className="passwordbox" type="password" placeholder="Verify Password" id="password" name="password"></input><br></br>
                    <h3 className="birthday">DOB</h3>
                    <select name="month" className="month">
                        <option value="month">Month</option>
                        <option value="month">Jan</option>
                        <option value="month">Feb</option>
                        <option value="month">Mar</option>
                        <option value="month">Apr</option>
                        <option value="month">May</option>
                        <option value="month">Jun</option>
                        <option value="month">Jul</option>
                        <option value="month">Aug</option>
                        <option value="month">Sep</option>
                        <option value="month">Oct</option>
                        <option value="month">Nov</option>
                        <option value="month">Dec</option>
                    </select>
                    <select name="Day" className="day">
                        <option value="day">Day</option>
                        <option value="day">1</option>
                        <option value="day">2</option>
                        <option value="day">3</option>
                        <option value="day">4</option>
                        <option value="day">5</option>
                        <option value="day">6</option>
                        <option value="day">7</option>
                        <option value="day">8</option>
                        <option value="day">9</option>
                        <option value="day">10</option>
                        <option value="day">11</option>
                        <option value="day">12</option>
                        <option value="day">13</option>
                        <option value="day">14</option>
                        <option value="day">15</option>
                        <option value="day">16</option>
                        <option value="day">17</option>
                        <option value="day">18</option>
                        <option value="day">19</option>
                        <option value="day">20</option>
                        <option value="day">21</option>
                        <option value="day">22</option>
                        <option value="day">23</option>
                        <option value="day">24</option>
                        <option value="day">25</option>
                        <option value="day">26</option>
                        <option value="day">27</option>
                        <option value="day">28</option>
                        <option value="day">29</option>
                        <option value="day">30</option>
                        <option value="day">31</option>
                    </select>
                        <select name="year" className="year">
                        <option value="year">Year</option>
                        <option value="year">1991</option>
                        <option value="year">1992</option>
                        <option value="year">1993</option>
                        <option value="year">1994</option>
                        <option value="year">1995</option>
                        <option value="year">1996</option>
                        <option value="year">1997</option>
                        <option value="year">1998</option>
                        <option value="year">1999</option>
                        <option value="year">2000</option>
                        <option value="year">2001</option>
                        <option value="year">2002</option>
                        <option value="year">2003</option>
                        <option value="year">2004</option>
                        <option value="year">2005</option>
                        <option value="year">2006</option>
                        <option value="year">2007</option>
                        <option value="year">2008</option>
                        <option value="year">2009</option>
                        <option value="year">2010</option>
                        <option value="year">2011</option>
                        <option value="year">2012</option>
                        <option value="year">2013</option>
                        <option value="year">2014</option>
                        <option value="year">2015</option>
                        <option value="year">2016</option>
                        <option value="year">2017</option>
                        <option value="year">2018</option>
                        <option value="year">2019</option>
                        <option value="year">2020</option>
                        <option value="year">2021</option>
                    </select><br></br>
                    <label for="zip"className="zip">Zip Code</label><br></br>
                    <input className="zipbox" type="text" placeholder="Enter Zip Code" id="zip" name="zip"></input><br></br>
                    <input type="checkbox" value="checkbox" id="checkbox"></input>
                    <label for="checkbox" className="newsletter">Newsletter</label>
                    <p className="newspara">We never sell or give out your email, and you can unsubscribe no hassle at<br></br> any time!</p>
                    <label for="phonenumber"className="phonenumber">Phone Number</label><br></br>
                    <input className="phonebox" type="text" placeholder="Enter Phone Number" id="phonenumber" name="phonenumber"></input><br></br>
                    <input type="checkbox" value="checkbox" id="checkbox"></input>
                    <label for="checkbox" className="newsletter">Receive SMS Updates</label><br></br>
                    <button className="register">Sign Up</button>
                </form>
            </div>
                <div className="member">
                    <div className="loginbox-">
                        <div className="logintext-">Already Member?</div>
                        <Link to='/join'><button className="loginbtn-">Sign In</button></Link>
                    </div>
                    <div className="socialtext-">
                        <p className="or">OR</p>
                        <p className="sign-in-">Sign UP using<br></br>social account</p>
                        <button className="socialbtn1-">SIGN UP with Facebook</button>
                        <button className="socialbtn2-">SIGN UP with Twitter</button>
                        <button className="socialbtn3-">SIGN UP with Google</button>
                    </div>
                    <div className="tos">SMS TOS</div>
                    <div className="tos1">
                        <p className="para1">
                            <p className="l1">Message and data rates may apply"<br></br></p>
                            <p className="l2">You can expect up to 1-2 text messages per month.<br></br></p>
                            <p className="l3">Text HELP to the number you received your message from for assistance.<br></br></p>
                            <p className="l4">Text STOP to the message you received your message from to stop receiving messages.</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
