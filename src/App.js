import React, { Component } from 'react';
import './App.css';
import './Styles.scss';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'

// import SignUpForm from './components/SignUpForm'
// import { FirebaseContext } from './components/Firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FirebaseContext.Consumer>
          {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer> */}
        <SignIn />
        <Welcome />
      </div>
    );
  }
}

export default App;
