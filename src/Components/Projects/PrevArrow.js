import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconStyle from '../IconStyle/IconStyle';

class PrevArrow extends Component {
  // constructor(props) {
  //   super(props);
  // } 

  static propTypes = {
      onClick: PropTypes.func
  };


  render() {
    return <span className="prev" onClick={this.props.onClick}> {IconStyle({style: 'left' })} </span> 
  }
}

export default PrevArrow;
