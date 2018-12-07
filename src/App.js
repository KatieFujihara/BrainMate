import React, { Component } from 'react';
import Registration from './components/registration'
import './App.css';
import './Styles.scss';
import SignUpForm from './components/SignUpForm'
import { FirebaseContext } from './components/Firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FirebaseContext.Consumer>
          {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer> */}
  
      </div>
    );
  }
}

export default App;
