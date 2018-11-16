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

  handleChange(file){
    var reader = new FileReader();
    reader.onloadend = function(){
      console.log(reader.result);
    };
    reader.readAsText(file);
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
        <input type="file" onChange={ (e) => this.handleChange(e.target.files[0]) } />
      </Layout>
    )
  }
}


export default post
