import React, { Component } from "react";
import Navbar from "./Navbar";
import { FirebaseContext } from "../components/Firebase";
import Browser from "@hickory/browser";
import { curi } from "@curi/router";
import prepareRoutes from "../routes"
import {loginUser} from "./actions/user_actions"
import {connect} from "react-redux"

const history = Browser();
const routes = prepareRoutes;
const router = curi(history, routes);


const RegistrationPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <RegistrationForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  handleClick = () => {
    this.props.firebase
    .getUserData() 
    .then(response => {
    response.forEach(doc => console.log(doc.data()))
    })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    // TODO: Do we wnat to use the username for anything? We could find a way to store this to the database via firebase
    const { username, email, passwordOne } = this.state;
    debugger
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.props.loginUser(authUser.user.uid)
        this.setState({ ...INITIAL_STATE });
        router.history.navigate({ pathname: "/settings", method: "REPLACE"});
        window.location.reload();
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    console.log('in registration render')
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="Login">
        <Navbar />
        <h1 className="username-header">Please choose a username.</h1>
        <p className="username-desc">
          This is the name that will show up on your Profile and in the
          Community.
        </p>
        <p className="username-desc">
          We discourage using real names and full names.
        </p>
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Username"
            className="user-input"
          />
          <h1 className="username-header">Please enter your email address.</h1>
          <p className="username-desc">
            This is the email address you will use to sign in.
          </p>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            className="user-input"
          />
          <h1 className="username-header">Please enter your password twice.</h1>
          <p className="username-desc">
            Please choose a unique password that you will remember.
          </p>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            className="user-input"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            className="user-input"
            placeholder="Confirm Password"
          />
            <button type="submit" className="welcome-button">
                Sign Up
            </button>
            {/* <button onClick={this.handleClick} >hello noob</button> */}
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userInfo)=>loginUser(userInfo)
  }
}

export default connect(null, mapDispatchToProps)(RegistrationPage);
