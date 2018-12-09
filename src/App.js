import React, { Component } from 'react';
import './App.css';
import './Styles.scss';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import Registration from './components/Registration'

import { FirebaseContext } from './components/Firebase';

// import SignUpForm from './components/SignUpForm'
// import { FirebaseContext } from './components/Firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirebaseContext.Consumer>
          {firebase => <Registration firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}

export default App;
