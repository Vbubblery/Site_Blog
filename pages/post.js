import Link from 'next/link';
import {withRouter} from 'next/router';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Layout from '../components/MyLayout';
import Markdown from '../components/Markdown';
const htmlParser = require('react-markdown/plugins/html-parser')

import {Card,CardContent} from "@material-ui/core";
import postStyle from '../styles/postStyle'
import { withStyles } from '@material-ui/core/styles';

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [/* ... */]
})

class Post extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {md: "# Loading"};
  }

  async componentDidMount(){
    if (this.props.router.query.id == null){
      this.setState((state, props) => ({
        md:"Error props!"
      }));
      return;
    }
    const res = await axios.get(`/api/loadmd?id=${this.props.router.query.id}`);
    this.setState((state, props) => ({
      md:res.data.body
    }));
  }

  render(){
    return(
      <Layout>
        <Card className={this.classes.card}>
          <CardContent className={this.classes.wordWrap}>
            <Markdown escapeHtml={false} >{`${this.state.md}`}</Markdown>
          </CardContent>
        </Card>
      </Layout>
    )
  }
}


export default withStyles(postStyle)(withRouter(Post))
