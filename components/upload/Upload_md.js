import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import uploadStyle from '../../styles/uploadStyle'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {TextField,Button,Divider,MenuItem} from '@material-ui/core/';
import ChipInput from 'material-ui-chip-input';

const authors = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Juncheng',
    label: 'Juncheng',
  },
  {
    value: 'Bubble',
    label: 'Bubble',
  },
];

const categories = [
  {
    value:'Web',
    label:'Web',
  },
  {
    value:'Data Science',
    label:'Data Science',
  },
  {
    value:'Travel',
    label:'Travel',
  },
  {
    value:'French',
    label:'French',
  },
];
class Upload_md extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      chips:[],
      author:'Admin',
      category:'Web',
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

  handleAddChip = (chip) =>{
    const arr = this.state.chips;
    this.setState({
      chips: [...arr,chip],
    });
  };

  handleDeleteChip = (chip,idx) =>{
    const arr = this.state.chips;
    arr.splice(idx, 1);
    this.setState({
      chips: [...arr],
    });
  };

  handleChange = (name)=>event =>{
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount(){
    //todo after all component loaded.
  };

  render(){
    return(
      <React.Fragment>
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
            select
            value={this.state.author}
            onChange={this.handleChange('author')}
            className={classNames(this.classes.textField)}
            SelectProps={{
              MenuProps:{
                className: this.classes.menu,
              }
            }}
            fullWidth
            margin="dense"
            variant="outlined">
            {authors.map(author => (
            <MenuItem key={author.value} value={author.value}>
              {author.label}
            </MenuItem>
          ))}
          </TextField>
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
            className={classNames(this.classes.textField)}
            select
            value={this.state.category}
            onChange={this.handleChange('category')}
            SelectProps={{
              MenuProps:{
                className: this.classes.menu,
              }
            }}
            fullWidth
            margin="dense"
            variant="outlined">
            {categories.map(category => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
          </TextField>
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
          <input accept=".md" className={this.classes.input} id="contained-button-md" type="file" onChange={ (e) => this.handleMarkDownChange(e.target.files[0]) }/>
          <label htmlFor="contained-button-md">
            <Button variant="contained" component="span" className={this.classes.button}>
              Upload MD
            </Button>
          </label>
        </form>
      </React.Fragment>
    )
  }
}

export default withStyles(uploadStyle)(Upload_md);
