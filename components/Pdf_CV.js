import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {Button,Card,CardContent} from '@material-ui/core/';
import CloudUploadIcon from '@material-ui/icons/GetApp';

import Pdf_CVStyle from '../styles/Pdf_CVStyle';

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
        <Button href="https://vbubblery.github.io/assets/pdf/resume.pdf" variant="contained" color="default" className={this.classes.button}>
          Download
          <CloudUploadIcon className={this.classes.rightIcon} />
        </Button>
        <Card className={this.classes.card}>
          <CardContent className={this.classes.cardContent}>
            <Document
                file={`https://vbubblery.github.io/assets/pdf/resume.pdf`}
                onLoadSuccess={this.onDocumentLoadSuccess}
                renderMode={`canvas`}
            >

            {
              Array.from(
                new Array(numPages),(el, index) => (
                  <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={1.5}
                  />),)
            }
            </Document>
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(Pdf_CVStyle)(Pdf_CV)
