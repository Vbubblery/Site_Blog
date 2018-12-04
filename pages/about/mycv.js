import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Layout from '../../components/MyLayout';
import Pdf_CV from '../../components/Pdf_CV';

import {Typography} from '@material-ui/core/';

class Mycv extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //todo after all component loaded.
  }

  render(){
    return(
      <React.Fragment>
          <Pdf_CV />
      </React.Fragment>
    )
  }
}

export default Mycv;
