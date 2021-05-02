import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const formHandle = (e) =>{
        alert(`email: ${email}, password: ${password}`)
        e.preventDefault()
    }
    return (
         <div className="main-div">
            <header className="heading-">
                <h2 className="heading1-">LOGIN</h2>
            </header>
            <div className="combined-">
                <div className="formblock-">
                    <form  onSubmit={formHandle}>
                    <label for="email"className="email-" required>E-mail</label><br></br>
                    <input value={email} onChange={e => setemail(e.target.value)} className="emailbox-" type="email" placeholder="Enter E-mail" id="email" name="email"></input>
                    <label for="password"className="password-">Password</label><br></br>
                    <input value={password} onChange={e => setpassword(e.target.value)} className="passwordbox-" type="password" placeholder="Enter Password" id="password" name="password"></input><br></br>
                        <button className="register-" type='submit'>Sign In</button>
                        <button className="register1-">Forgot Password</button>
                    </form>
                </div>
                <div className="member-">
                    <div className="loginbox-">
                        <div className="logintext-">NEW USER</div>
                        <Link to='/join'><button className="loginbtn-">Sign Up</button></Link>
                    </div>
                    <div className="socialtext-">
                        <p className="or">OR</p>
                        <p className="sign-in-">Sign In using<br></br>social account</p>
                        <button className="socialbtn1-">Login with Facebook</button>
                        <button className="socialbtn2-">Login with Twitter</button>
                        <button className="socialbtn3-">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
