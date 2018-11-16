import Link from 'next/link';
import React from 'react';
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
  }

  componentDidMount(){
    //todo
  }
  render(){
    return(
      <Layout>
        <Markdown escapeHtml={false} >{post1}</Markdown>
      </Layout>
    )
  }
}


export default post
