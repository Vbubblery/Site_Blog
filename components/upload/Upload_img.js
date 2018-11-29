import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import uploadStyle from '../../styles/uploadStyle'

import { withStyles } from '@material-ui/core/styles';
import {Button,Typography} from '@material-ui/core/';

class Upload_img extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      image:'',
    };
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
  };

  componentDidMount(){
    //todo after all component loaded.
  }

  render(){
    return(
      <React.Fragment>
        <input accept="image/*" className={this.classes.input} id="contained-button-image" type="file" onChange={ (e) => this.handleImageChange(e.target.files[0]) }/>
        <label htmlFor="contained-button-image">
          <Button variant="contained" component="span" className={this.classes.button}>
            Upload IMG
          </Button>
          <Link href={`/api/images/${this.state.image.id}`}>
            <Typography variant="h6">{`${this.state.image.id||'Upload Index Image'}`}</Typography>
          </Link>
        </label>
      </React.Fragment>
    )
  }
}

export default withStyles(uploadStyle)(Upload_img);
