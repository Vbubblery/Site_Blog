import Link from 'next/link';
import {withRouter} from 'next/router'
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
    this.state = {md: "# Loadding"};
  }

  componentDidMount(){
    self = this;
    var xml = new XMLHttpRequest;
    xml.addEventListener("readystatechange", function(ev) {
      if (xml.status == 200 && xml.readyState == 4) {
        self.setState((state, props) => ({
          md:JSON.parse(xml.responseText).body
        }));
      }
    });
    xml.open("get",`/api/loadmd?id=${this.props.router.query.id}`,true);
    xml.send();
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
