import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/SignUpForm'
import { FirebaseContext } from './components/Firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirebaseContext.Consumer>
          {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
  
      </div>
    );
  }
}

export default App;
