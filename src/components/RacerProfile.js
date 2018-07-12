import React from 'react';

export default class RacerProfile extends React.Component {
  handleAddRacer = () => {
    this.props.handleAddRacer(this.props.thisRacer)
  }

  render() {
    return (
      <div>
        {this.props.thisRacer && <p>This is the profile for {this.props.thisRacer}</p>}
        <button
          onClick={this.handleAddRacer}
        >
          Add
    </button>
      </div>
    )
  }
}
