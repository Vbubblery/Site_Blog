
import React from 'react';

import {Divider} from '@material-ui/core/';
import Upload_md from './upload/Upload_md';
import Upload_img from './upload/Upload_img';

class Upload extends React.Component{
  constructor(props){
    super(props);
  };

  componentDidMount(){
    //todo after all component loaded.
  };

  render(){
    return(
      <React.Fragment>
        <Upload_img />
        <Divider />
        <Upload_md />
      </React.Fragment>
    )
  }
}

export default Upload
