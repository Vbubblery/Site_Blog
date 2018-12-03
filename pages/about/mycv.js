import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';

import { Document, Page } from 'react-pdf/dist/entry.parcel';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import {Typography} from '@material-ui/core/';

class example extends React.Component{
  state = {
    numPages: null,
  }
  constructor(props){
    super(props);
    this.classes = props.classes;
  }

  componentDidMount(){
    //todo after all component loaded.
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render(){
    const { numPages } = this.state;
    return(
      <React.Fragment>
        <Document
            file={file}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={options}
        >
        {
          Array.from(
            new Array(numPages),(el, index) => (
              <Page key={`page_${index + 1}`}
                  pageNumber={index + 1}/>),)
        }
        </Document>
      </React.Fragment>
    )
  }
}

//export default withStyles(Style)(example)
