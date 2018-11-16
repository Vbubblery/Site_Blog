import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import Style from '../styles/uploadStyle'

import { withStyles } from '@material-ui/core/styles';
import {Typography,Button} from '@material-ui/core/';

class Upload extends React.Component{
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
        <input accept="*" className={this.classes.input} id="contained-button-file" multiple type="file"/>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={this.classes.button}>
            Upload
          </Button>
      </label>
      </React.Fragment>
    )
  }
}

export default withStyles(Style)(Upload)
