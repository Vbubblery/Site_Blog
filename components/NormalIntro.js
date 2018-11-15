import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { withStyles } from '@material-ui/core/styles';
import IntroStyle from '../styles/introStyle'
import biubiu from '../utils/images/biubiu.jpg'

import {Grid,Card,CardContent,Typography,Hidden,CardMedia} from '@material-ui/core/';

/***
 Will delete in the feature.
***/
const featuredPosts = [
  {
    title: 'Recommend post 1',
    date: 'Nov 12',
    description:
      'Coming Soon...',
  },
  {
    title: 'Recommend post 2',
    date: 'Nov 11',
    description:
      'Coming Soon...',
  },
];



class NormalIntro extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }
  
  render(){
    return(
      <React.Fragment>
        <Grid container spacing={40} className={this.classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={this.classes.card}>
                  <div className={this.classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={this.classes.cardMedia}
                      image={biubiu}
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(IntroStyle)(NormalIntro)