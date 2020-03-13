import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconStyle from '../IconStyle/IconStyle';

class NextArrow extends Component {

    static propTypes = {
        onClick: PropTypes.func
    };
  
    // constructor(props) {
    //     super(props);
    // }
  
    render() {
      return  <span className="next" onClick={this.props.onClick}> {IconStyle({style: 'right' })} </span> 
    }
}

export default NextArrow;