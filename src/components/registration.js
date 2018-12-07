import React from 'react'
import logo from '../images/logo.png'

const Registration = () => {
    return (
    <div>
        <img src={logo} alt='logo' className = "logo"/>
        <div className="accent-bar">
            <h1 className="title">A peaceful mind is a healthy mind.</h1>
            <h1 className="title">A healthy mind leads a healthy life.</h1>
        </div>
        <div>
            <div className="row">
                <div className="column">
                    <h1 className="sign-in">Sign In</h1>
                    <p className="sign-in-sub">Welcome back!</p>
                    <input 
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      className="user-input"
                    />
                    <input
                      name="passwordOne"
                      type="password"
                      placeholder="Password"
                      className="user-input"
                    />
                    <button className="sign-in-button">
                        Login
                    </button>
                </div>
                <div className="column">
                    <h1 className="sign-in">Register</h1>
                    <p className="sign-in-sub">Create your free account today!</p>
                    <button className="sign-in-button">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Registration