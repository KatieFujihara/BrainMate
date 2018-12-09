import React from 'react'
import logo from '../images/logo.png'
import Navbar from './Navbar'
import { Active, Link } from "@curi/react-dom";

const ActiveLink = ({ to, params, partial, ...rest }) => (
    <Active name={to} params={params} partial={partial}>
      {active => (
        <Link
          to={to}
          params={params}
          {...rest}
          className={active ? "active" : ""}
        />
      )}
    </Active>
  );
  
const Welcome = () => {
    return (
    <div>
        <Navbar />
        <div className="row">
            <div className="column">
                <img src={logo} alt='logo' className = "logo-welcome"/>
            </div>
            <div className="column">
                <h1 className="welcome-header">
                    Welcome to Brain.Mate!
                </h1>
                <div className="welcome-message">
                    <p>Before we let you dive into this application we want to go over how Brain Mate works. Brain Mate allows you to journal and record your daily mood. You can keep this information only on your account, but you also have the option to publish to a public forum where you can view how others in the community are doing.</p>
                    <p>We kindly ask that all members to this community agree to show respect for each other. We are all on this wild journey of mental health together and would appreciate interactions to be supportive and empathetic.</p>
                    <p>Thank you!</p>
                    <p>Brain Mate Team</p>
                </div>
                <button className="welcome-button">
                    <ActiveLink to="EmailRegistration">Agree</ActiveLink>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Welcome