import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import mainContentStyle from '../styles/mainContentStyle';

import Markdown from './Markdown';
const htmlParser = require('react-markdown/plugins/html-parser')
import MainSideBar from './MainSideBar'

import { withStyles } from '@material-ui/core/styles';
import {Grid,Typography,Divider,paper} from '@material-ui/core/';


const post1 = "# This is a header\n\nAnd this is a paragraph\n\n<code>const htmlParser = require('react-markdown/plugins/html-parser')</code>";
const post2 = '# 1This is a header\n\nAnd this is a paragraph';
const post3 = '# 2This is a header\n\nAnd this is a paragraph';

const posts = [post1,post2,post3];


const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [/* ... */]
})

class MainContent extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }
  
  render(){
    return(
      <React.Fragment>
        <Grid container spacing={40} className={this.classes.mainGrid}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                Latest Blog Posts
            </Typography>
            <Divider />
            {posts.map(post => (
              <Markdown className={this.classes.markdown} key={post.substring(0, 40)} astPlugins={[parseHtml]} escapeHtml={false}>{post}</Markdown>
              ))}
          </Grid>
          <MainSideBar />
        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(mainContentStyle)(MainContent)