import React, { Component } from "react";
import Navbar from "./Navbar";
import { FirebaseContext } from "../components/Firebase";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class SettingsPage extends Component {
    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
      render() {
        const { selectedOption } = this.state;
    
        return (
        <div>   
            <Navbar />  
            <form> 
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
            <button type="submit" className="welcome-button">
                Sign Up
            </button>
            </form>
        </div>  
    );
  }
}
export default SettingsPage;
