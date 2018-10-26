import React from 'react';
import Stat from './Stat';

import '../../styles/modal/StatGraph.css'

class StatGraph extends React.Component {

  render() {
    return (
      <div className="statcontainer">
        <div><h3 className="stattitle">Stats</h3></div>
        <div className="statgraph">
          <Stat statAmount={this.props.stats['hp']} />
          <Stat statAmount={this.props.stats['attack']} />
          <Stat statAmount={this.props.stats['defense']} />
          <Stat statAmount={this.props.stats['special-attack']} />
          <Stat statAmount={this.props.stats['special-defense']} />
          <Stat statAmount={this.props.stats['speed']} />
        </div>
        <div className="statnames">
          <p className="statname">Hp</p>
          <p className="statname">Attack</p>
          <p className="statname">Defense</p>
          <p className="statname">Special Aattack</p>
          <p className="statname">Special Defense</p>
          <p className="statname">Speed</p>
        </div>
      </div>
    )
  }
};

export default StatGraph;