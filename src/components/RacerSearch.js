import React from 'react';

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
   
  handleChange = (e) => {
    this.setState({ racer : e.target.value });
  }

  handleSearchRacer = (e) => {
    e.preventDefault();
    this.props.handleSearchRacer(this.state.racer)
  }

  render() {
    return (
      <div className= "search">
        <form className="name-search" onSubmit={this.handleSearchRacer}>
          <Typeahead 
            className="name-search__input" 
            options={this.racers}
            placeholder="Search for racer by name" 
            value={this.state.value} 
            onChange={this.handleChange} />
          <button className="button"> Search </button>
        </form>
      </div>
    );
  }
  
};


//if racer in previous array, display racer's profile
//if racer not in previous array, error message ask if want to register