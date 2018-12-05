import React from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import Layout from '../../components/MyLayout';
import Pdf_CV from '../../components/Pdf_CV';

class Mycv extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <Layout>
          <Pdf_CV />
        </Layout>
      </React.Fragment>
    )
  }
}

export default Mycv;
