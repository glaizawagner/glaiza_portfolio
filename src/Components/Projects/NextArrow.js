import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconStyle from '../IconStyle/IconStyle';

class NextArrow extends Component {

    static propTypes = {
        onClick: PropTypes.func
    };
  
    render() {
      return  <div className="next" onClick={this.props.onClick}> {IconStyle({style: 'right' })} </div> 
    }
}

export default NextArrow;