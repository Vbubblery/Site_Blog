import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from '../styles/headerStyle'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Button,Typography,IconButton,AppBar,Menu,MenuItem} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const options = [
  {name:'Tech',link:'/'},
  {name:'news',link:'/'},
  {name:'CS',link:'/'},
  {name:'About',link:'/about'},
];
const ITEM_HEIGHT = 50;

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
  redirect = (link)=>{
    Router.push(link);
  }
  render(){
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <React.Fragment>
        <AppBar position="sticky" className={this.classes.appbarMargin} color="default">
          <Toolbar className={this.classes.toolbarMain}>
            <IconButton color="inherit" aria-label="More" aria-owns={open ? 'long-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{style:{maxHeight: ITEM_HEIGHT * 4,width: 200,}}}>
              {options.map(option=>(
                <MenuItem key={option.name} onClick={()=>this.redirect(option.link)}>
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
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
        {/**
          <Toolbar variant="dense" className={this.classes.toolbarSecondary}>
            {options.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
          </Toolbar>
          **/}
      </React.Fragment>
    )
  }
}

export default withStyles(headerStyle)(Header)
