import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {Typography} from '@material-ui/core/';

import Pdf_CVStyle from '../styles/Pdf_CVStyle';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class Pdf_CV extends React.Component{
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
            file={`http://127.0.0.1:3001/cv/resume.pdf`}
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

export default withStyles(Pdf_CVStyle)(Pdf_CV)
