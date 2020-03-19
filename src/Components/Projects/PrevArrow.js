import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconStyle from '../IconStyle/IconStyle';

class PrevArrow extends Component {

  static propTypes = {
      onClick: PropTypes.func
  };

  render() {
    return <div className="prev" onClick={this.props.onClick}> {IconStyle({style: 'left' })} </div> 
  }
}

export default PrevArrow;
