import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import PropTypes from 'prop-types';

import dynamic from 'next/dynamic'


class All extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }

  componentDidMount(){
    //todo after all component loaded.
  }

  render(){
    return(
      <React.Fragment>
        //todo
      </React.Fragment>
    )
  }
}
export default All;
//export default withStyles(Style)(example)
