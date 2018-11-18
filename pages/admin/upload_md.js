import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/MyLayout';
import Upload from '../../components/Upload';

class Upload_md extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }

  componentDidMount(){
    // todo
  }

  render(){
    return(
      <Layout>
        <Upload />
      </Layout>
    )
  }
}

export default Upload_md;
