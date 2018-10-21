import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/home/LoadingError.css';

const propTypes = {
  error: PropTypes.string.isRequired,
}

class LoadingError extends React.Component {
  constructor (props) {
    super(props);

    this.showError = this.showError.bind(this);
  }

  showError (evt) {
    evt.preventDefault();
    alert(this.props.error);
  }

  render () {
    return (
      <h2>
        {'Oh no! There was an issue loading Pokemon! '}
        <button className="show-error-button" onClick={this.showError} >
          {'See error'}
        </button>
      </h2>
    );
  }
}

LoadingError.propTypes = propTypes;

export default LoadingError;
