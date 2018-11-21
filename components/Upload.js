import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Style from '../styles/uploadStyle'

import { withStyles } from '@material-ui/core/styles';
import {Typography,Button} from '@material-ui/core/';

class Upload extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }
  async postdata(data){
    // traditional ajax method
    // var xml = new XMLHttpRequest;
    // xml.open("post","/api/loadmd",true);
    // xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xml.send(JSON.stringify(data));
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      data: JSON.stringify(data),
      url:`/api/loadmd`,
    };
    const res = await axios(options);
    alert("End");
  }

  handleChange(file){
    var data = {};
    data.name=file.name;
    var reader = new FileReader();
    reader.onloadend = ()=> {
      data.data = reader.result;
      this.postdata(data);
    };
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
