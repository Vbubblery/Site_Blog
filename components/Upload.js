import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Style from '../styles/uploadStyle'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Typography,TextField,Button,Divider} from '@material-ui/core/';
import ChipInput from 'material-ui-chip-input'

class Upload extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      image:'',
      chips:[],
    };
  };

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
  };

  handleMarkDownChange(file){
    var data = {};
    data.name=file.name.slice(0, -3);
    var reader = new FileReader();
    reader.onloadend = ()=> {
      data.data = reader.result;
      this.postdata(data);
    };
    reader.readAsText(file);
  };

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

  handleTextChange = (name)=>event =>{
    this.setState({
      [name]: event.target.value,
    });
  };
  handleAddChip = (chip) =>{
    const arr = this.state.chips;
    this.setState({
      chips: [...arr,chip],
    });
  }
  handleDeleteChip = (chip,idx) =>{
    const arr = this.state.chips;
    arr.splice(idx, 1);
    this.setState({
      chips: [...arr],
    });
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
            Upload IMG
          </Button>
          <Link href={`/api/images/${this.state.image.id}`}>
            <Typography variant="h6">{`${this.state.image.id||'Upload Index Image'}`}</Typography>
          </Link>
        </label>
        <Divider />
        <input accept=".md" className={this.classes.input} id="contained-button-md" type="file" onChange={ (e) => this.handleMarkDownChange(e.target.files[0]) }/>
        <label htmlFor="contained-button-md">
          <Button variant="contained" component="span" className={this.classes.button}>
            Upload MD
          </Button>
        </label>
        <form className={this.classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-image_id"
            label="Image ID"
            className={classNames(this.classes.textField, this.classes.dense)}
            type="number"
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-author"
            label="Author"
            className={classNames(this.classes.textField, this.classes.dense)}
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-title"
            label="Title"
            className={classNames(this.classes.textField, this.classes.dense)}
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-bref"
            label="Bref"
            className={classNames(this.classes.textField, this.classes.dense)}
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-category"
            label="Category"
            className={classNames(this.classes.textField, this.classes.dense)}
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-subCategory"
            label="Sub-Category"
            className={classNames(this.classes.textField, this.classes.dense)}
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <ChipInput
            value={this.state.chips}
            className={classNames(this.classes.textField, this.classes.dense)}
            variant= "outlined"
            label = "Tags"
            fullWidth
            onAdd={(chip) => this.handleAddChip(chip)}
            onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
          />
        </form>
      </React.Fragment>
    )
  }
}

export default withStyles(Style)(Upload)
