import React, { Component } from "react";
import Navbar from "./Navbar";
import { FirebaseContext } from "../components/Firebase";
import Select from "react-select";
import { connect } from "react-redux";

const selectYesOrNo = [
    { value: undefined, label: "Select" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" } 
];

const SettingsPage = ({ currentUserId}) => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SettingsForm  currentUserId={currentUserId} firebase={firebase} />}
    </FirebaseContext.Consumer>
</div>)


class SettingsForm extends Component {
    state = {
        selectedOption1: null,
        selectedOption2: null,
        selectedOption3: null,
        time: ''
      }
      handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1});
        console.log(`Option selected:`, selectedOption1);
      }
      handleChange2 = (selectedOption2) => {
        this.setState({ selectedOption2});
        console.log(`Option selected:`, selectedOption2);
      }
      handleChange3 = (selectedOption3) => {
        this.setState({ selectedOption3});
        console.log(`Option selected:`, selectedOption3);
      }
      handleChange4 = (event) => {
          const time = event.target.value
          this.setState({ time });
          console.log(time);
          event.persist();
      }

      handleFormSubmit = (event) => {
        event.preventDefault()
        const {selectedOption1, selectedOption2, selectedOption3, time} = this.state
        // TODO: send to new firebase method that will write this data to database
        this.props.firebase 
          .doAssignUserPreferencesWithUserId(this.props.currentUserId)
      }
      
      render() {
        const { selectedOption1, selectedOption2, selectedOption3, time } = this.state;

    return (
      <div>
        <Navbar />
        <h1 className="username-header">Get Notified</h1>
        <p className="username-desc">
          Don't worry! These settings can be changed at any time from your
          SETTINGS.
        </p>
        <br />
        <form onSubmit={this.handleFormSubmit}>
          <p className="username-desc">
            Receive email notifications from our team when we need to get in
            touch with you.
          </p>
          <Select
            className="dropdown"
            value={selectedOption1}
            onChange={this.handleChange1}
            options={selectYesOrNo}
          />
          <p className="username-desc">
             Receive email notifications when someone comments on your post.
          </p>
          <Select
            className="dropdown"
            value={selectedOption2}
            onChange={this.handleChange2}
            options={selectYesOrNo}
          />
          <p className="username-desc">
            Receive a reminder to add a diary entry for the day.
          </p>
          <Select
            className="dropdown"
            value={selectedOption3}
            onChange={this.handleChange3}
            options={selectYesOrNo}
          />
          <p className="username-desc">
            Remind me at: (ex: 8:00AM)         
          </p>
          <input className="dropdown" type="time" id="time"
            value={time}
            onChange={this.handleChange4} />
          <button type="submit" className="welcome-button">
            Save
          </button>
        </form>
      </div>
        );
      }
    }
    

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId
  }
}




export default connect(mapStateToProps)(SettingsPage);
