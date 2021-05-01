import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
         <div className="main-div">
            <header className="heading-">
                <h2 className="heading1-">LOGIN/REGISTER</h2>
            </header>
            <div className="text-">
                <p className="simple-">LOGIN</p>
            </div>
            <div className="combined-">
                <div className="formblock-">
                    <form action="/signup">
                    <label for="email"className="email-" required>E-mail</label><br></br>
                    <input className="emailbox-" type="email" placeholder="Enter E-mail" id="email" name="email"></input>
                    <label for="password"className="password-">Password</label><br></br>
                    <input className="passwordbox-" type="password" placeholder="Enter Password" id="password" name="password"></input><br></br>
                        <button className="register-">Sign In</button>
                        <button className="register1-">Forgot Password</button>
                </form>
            </div>
                <div className="member-">
                    <div className="loginbox-">
                        <div className="logintext-">NEW USER</div>
                        <Link to='/join'><button className="loginbtn-">Sign Up</button></Link>
                    </div>
                    <div className="socialtext-">
                        <p className="socialtxt-">OR</p>
                        <p className="socialtxt-">Sign In using<br></br>social account</p>
                        <div className="socialbtn-">
                        <button className="socialbtn1-">Login with Facebook</button>
                        </div>
                        <div className="socialbtn-">
                        <button className="socialbtn2-">Login with Twitter</button>
                        </div>
                        <div className="socialbtn-">
                        <button className="socialbtn3-">Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
