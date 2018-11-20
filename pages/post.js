import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Layout from '../components/MyLayout';
import Markdown from '../components/Markdown';
const htmlParser = require('react-markdown/plugins/html-parser')
import post1 from '../utils/blog-post.1.md';
//const post1 = "# This is a header\n\nAnd this is a paragraph\n\n<code>const htmlParser = require('react-markdown/plugins/html-parser')</code>";

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
  processingInstructions: [/* ... */]
})

class post extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {md: "# Loadding"};
  }

  async componentDidMount(){
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
    const res = await axios.get(`/api/loadmd?id=${this.props.router.query.id}`);
    this.setState((state, props) => ({
      md:res.data.body
    }));
  }

  render(){
    return(
      <Layout>
        <Markdown escapeHtml={false} >{`${this.state.md}`}</Markdown>
      </Layout>
    )
  }
}


export default withRouter(post)
