import React from 'react';
import PropTypes from 'prop-types';
import PokemonType from '../core/PokemonType';

import '../../styles/modal/TypeContainer.css'

const propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  weaknesses: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      multiplier: PropTypes.string
    })
  ).isRequired
};

class TypeContainer extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} type-container`}>
        <h3>Type</h3>
        <PokemonType isModal types={this.props.types} isWeakness={false} />
        <h3>Weakness</h3>
        <PokemonType isModal types={this.props.weaknesses} isWeakness />
      </div>
    )
  }
}

TypeContainer.propTypes = propTypes;

export default TypeContainer;

