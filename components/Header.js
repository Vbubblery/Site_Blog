import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from '../styles/headerStyle'

import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Button,Typography,IconButton,AppBar} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const options = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Travel',
  'About',
];
const ITEM_HEIGHT = 48;

class Header extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {anchorEl:null,};
  }
  handleClick = event =>{
    this.setState({ anchorEl: event.currentTarget });
  }
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render(){
    return (
      <React.Fragment>
        <AppBar position="sticky" color="default">
          <Toolbar className={this.classes.toolbarMain}>
            <IconButton color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Link href="/"><IconButton><HomeIcon /></IconButton></Link>
            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={this.classes.toolbarTitle}>
              Juncheng's Blog
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Link href="/admin/upload_md">
              <Button variant="outlined" size="small">
                Upload
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
          <Toolbar variant="dense" className={this.classes.toolbarSecondary}>
            {sections.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
          </Toolbar>
      </React.Fragment>
    )
  }
}

export default withStyles(headerStyle)(Header)
