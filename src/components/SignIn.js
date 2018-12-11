import React, { Component } from "react";
import logo from "../images/logo.png";
import { Active, Link } from "@curi/react-dom";
import { FirebaseContext } from "../components/Firebase";

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

const SignInPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SignInForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    // TODO: Do we wnat to use the username for anything? We could find a way to store this to the database via firebase
    const { username, email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        window.alert("It works!");
        // TODO: set up a re-route ex. this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
        console.log(error.message)
      });

    event.preventDefault();
  };
  render() {
    const { email, password } = this.state;

    return (
      <div>
        <img src={logo} alt="logo" className="logo" />
        <div className="accent-bar">
          <h1 className="title">A peaceful mind is a healthy mind.</h1>
          <h1 className="title">A healthy mind leads a healthy life.</h1>
        </div>
        <div>
          <div className="row">
            <div className="column">
              <h1 className="header">Sign In</h1>
              <p className="sign-in-sub">Welcome back!</p>
              <form onSubmit={this.onSubmit} >
                <input
                  value={email}
                  onChange={this.onChange}
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  className="user-input"
                />
                <input
                  value={password}
                  onChange={this.onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="user-input"
                />
                <button className="sign-in-button" type="submit">
                  Login
                </button>
              </form>
            </div>
            <div className="column">
              <h1 className="header">Register</h1>
              <p className="sign-in-sub">Create your free account today!</p>
              <button className="sign-in-button">
                <ActiveLink to="Welcome">Register</ActiveLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
