import React, { Component } from 'react';
import Registration from './components/registration'
import './App.css';
import './Styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Registration />
        </header>
      </div>
    );
  }
}

export default App;
