import React from 'react';
import { TypeAhead } from 'react-power-select';

export default class RacerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      racers : [],
      racer : ''
    }
  }

  componentDidMount() {
    const racers = this.props.signedUpRacers.map((item) => item.name);
    this.setState({ racers: racers })
  }
  
  handleChange = (name) => {
    this.setState({ racer : name.option });
  }

  handleSearchRacer = (e) => {
    e.preventDefault();
    console.log(this.state.racer)
    this.props.handleSearchRacer(this.state.racer)
  }

  render() {
    return (
      <div className= "search">
        <form className="name-search" onSubmit={this.handleSearchRacer}>
          <TypeAhead 
            className="name-search__input" 
            options={this.state.racers}
            selected={this.state.racer}
            placeholder="Search for racer by name" 
            onChange={this.handleChange} />
          <button className="button"> Search </button>
        </form>
      </div>
    );
  }
  
};


//if racer in previous array, display racer's profile
//if racer not in previous array, error message ask if want to register