import React from 'react';

import LoadingGif from '../../assets/loading_icon.gif';

class Loader extends React.Component {
  render () {
    return (
      <div align="center">
        <img key="loader" src={LoadingGif} alt="Loading more Pokemon" />
      </div>
    );
  }
}

export default Loader;
