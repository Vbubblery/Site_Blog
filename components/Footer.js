import React from 'react'
import PropTypes from 'prop-types'
import footerStyle from '../styles/footerStyle'
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.copyright = props.copyright;
  }
  render(){
    const now = new Date()
    return(
      <footer className={this.classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Juncheng ZHOU Blog
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <span>&copy; </span>
          <span>{now.getFullYear()} </span>
          <span>{this.copyright}</span>
        </Typography>
      </footer>
    )
  }
}
Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
}

export default withStyles(footerStyle)(Footer)