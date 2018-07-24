import React from 'react';
import Header from './Header';
import data from '../test/racers.json';
import RacerSearch from './RacerSearch';
import RacerProfile from './RacerProfile';
import Footer from './Footer'

export default class RaceDay extends React.Component {
  state = {
    signedUpRacers: [],
    totalRacers : [],
    thisRacer : '',
    racerCount : 0
  };

  componentWillMount() {
    const signedUpRacers = data.map((item) => item);
    this.setState({ signedUpRacers: signedUpRacers })
  }

  handleSearchRacer = (racer) => {
    const thisRacer = this.state.signedUpRacers.find(r => r.name === racer)
    this.setState({ thisRacer : thisRacer });
  };

  //add to totalRacers array
  handleAddRacer = (racer) => {
    this.setState((prevState) => ({ totalRacers: prevState.totalRacers.concat(racer) }));
    this.setState((prevState) => ({ racerCount : prevState.racerCount + 1 }));
    this.setState({ thisRacer: '' })
  };

  
  render() {
    return (
      <div className="main">
        <Header />
        <div className="container">
        <RacerSearch 
          handleSearchRacer = {this.handleSearchRacer}
          signedUpRacers = {this.state.signedUpRacers}
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