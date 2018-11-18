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
  postdata(data){
    var xml = new XMLHttpRequest;
    xml.open("post","/loadmd",true)
    xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xml.send(JSON.stringify({data}))
    // todo apply the redux and get the
    // response from the server and then refresh the
    // state
  }

  handleChange(file){
    var reader = new FileReader();
    reader.onloadend = ()=> this.postdata(reader.result);
    reader.readAsText(file);
  }

  componentDidMount(){
    //todo after all component loaded.
  }

  render(){
    return(
      <React.Fragment>
        <input accept="*" className={this.classes.input} id="contained-button-file" type="file" onChange={ (e) => this.handleChange(e.target.files[0]) }/>
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
