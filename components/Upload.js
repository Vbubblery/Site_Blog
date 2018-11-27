import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Style from '../styles/uploadStyle'

import { withStyles } from '@material-ui/core/styles';
import {Typography,Button,Divider} from '@material-ui/core/';

class Upload extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {image:''};
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
    alert("Done");
  }

  handleChange(file){
    var data = {};
    data.name=file.name.slice(0, -3);
    var reader = new FileReader();
    reader.onloadend = ()=> {
      data.data = reader.result;
      this.postdata(data);
    };
    reader.readAsText(file);
  }
  async handleImageChange(image){
    const form = new FormData();
    form.append('avatar', image);
    const options = {
      method: 'POST',
      header:{'content-type': `multipart/form-data; boundary=${form._boundary}`},
      data:form,
      url:'/api/uploadimg',
    };
    const res = await axios(options);
    console.log(res.data);
    this.setState((state, props) => ({
      image:res.data,
    }));
  }
  componentDidMount(){
    //todo after all component loaded.
  }

  render(){
    return(
      <React.Fragment>
        <input accept="image/*" className={this.classes.input} id="contained-button-image" type="file" onChange={ (e) => this.handleImageChange(e.target.files[0]) }/>
        <label htmlFor="contained-button-image">
          <Button variant="contained" component="span" className={this.classes.button}>
            Upload
          </Button>
          <Link href={`/api/images/${this.state.image.id}`}>
            <Typography variant="h6">{`${JSON.stringify(this.state.image)}`}</Typography>
          </Link>
        </label>
        <Divider />
        <input accept=".md" className={this.classes.input} id="contained-button-md" type="file" onChange={ (e) => this.handleChange(e.target.files[0]) }/>
        <label htmlFor="contained-button-md">
          <Button variant="contained" component="span" className={this.classes.button}>
            Upload
          </Button>
        </label>
      </React.Fragment>
    )
  }
}

export default withStyles(Style)(Upload)
