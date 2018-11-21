import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { withStyles } from '@material-ui/core/styles';
import IntroStyle from '../styles/introStyle'

import {Paper,Grid,Typography} from '@material-ui/core/';

class BigIntro extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }

  render(){
    return(
      <React.Fragment>
        <Paper className={this.classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={8}>
              <div className={this.classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Welcome to my Blog
                </Typography>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    I will record everything here!
                </Typography>
                <Typography align="right" variant="h5" color="inherit" paragraph>
                  -- Juncheng ZHOU
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    )
  }
}
export default withStyles(IntroStyle)(BigIntro)
