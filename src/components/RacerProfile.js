import React from 'react';
import blankProfile from '../img/profile-blank.png';

export default class RacerProfile extends React.Component {
  handleAddRacer = () => {
    this.props.handleAddRacer(this.props.thisRacer)
  }

  render() {
    return (
      <div>
        {this.props.thisRacer && 
          <div className="racer-profile">
          <div className="profile-header">
            <img src={blankProfile}/>
            <div className="racer-info">
              <h1>{this.props.thisRacer}</h1>
              <p>Age: 24</p>
              <p>Distance: 1 Mile</p>
            </div>
          </div>
          <div>
            <p>Is this information correct?</p>
            <button className="button"
            onClick={this.handleAddRacer}
            >
            Add Racer
            </button>
          </div>
        </div>}
      </div>
    )
  }
}
