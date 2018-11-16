import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';

class example extends React.Component{
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

//export default withStyles(headerStyle)(example)
