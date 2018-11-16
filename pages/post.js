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
    let data = {};
		data.title = "title";
    data.message = "message";
    var xml = new XMLHttpRequest;
    xml.open("post","/loaddata")
    xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xml.send(JSON.stringify(data))
  }
  render(){
    return(
      <Layout>
        {/**<Markdown escapeHtml={false} >{post1}</Markdown>**/}
        <form action="/upload" method="POST" encType="multipart/form-data">
          <input type="file" name="file" id="file" />
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    )
  }
}


export default post