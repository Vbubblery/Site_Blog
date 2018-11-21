import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';

import mainContentStyle from '../styles/mainContentStyle';

import MainSideBar from './MainSideBar'

import { withStyles } from '@material-ui/core/styles';
import {Grid,Typography,Divider,paper} from '@material-ui/core/';

class MainContent extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {mds:[]}
  }
  async componentDidMount(){
    const res = await axios.get(`/api/allmd`);
    this.setState((state, props) => ({
      mds:res.data
    }));
    console.log(this.state)
  }
  render(){
    var posts = this.state.mds && this.state.mds.map(post=>{
      return(
        <Typography variant="subtitle1" key={post._id} gutterBottom>
          <Link href={`/post?id=${post._id}`}><a>{post.title}</a></Link>
        </Typography>
      )
    });

    return(
      <React.Fragment>
        <Grid container spacing={40} className={this.classes.mainGrid}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                Latest Blog Posts
            </Typography>
            <Divider />
            {posts}
          </Grid>
          <MainSideBar />
        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(mainContentStyle)(MainContent)
