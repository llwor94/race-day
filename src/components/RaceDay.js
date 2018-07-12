import React from 'react';
import Header from './Header';
import RacerSearch from './RacerSearch';
import RacerProfile from './RacerProfile';
import Footer from './Footer'

export default class RaceDay extends React.Component {
  state = {
    totalRacers : [],
    thisRacer : undefined,
    racerCount : 0
  };

  handleSearchRacer = (racer) => {
    this.setState({ thisRacer : racer });
  };

  //add to totalRacers array
  handleAddRacer = (racer) => {
    this.setState((prevState) => ({ totalRacers: prevState.totalRacers.concat([racer]) }));
    this.setState((prevState) => ({ racerCount : prevState.racerCount + 1 }));
  };

  
  render() {
    return (
      <div class="main">
        <Header />
        <div className="container">
        <RacerSearch 
          handleSearchRacer = {this.handleSearchRacer}
        />
        <RacerProfile 
          thisRacer = {this.state.thisRacer}
          handleAddRacer={this.handleAddRacer}
        />
        </div>
        <Footer />
      </div>
    )
  }
}