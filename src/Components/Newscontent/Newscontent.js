import React,{Component} from 'react'
import 'tachyons';
import { Document } from 'react-pdf';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';


import News from '../../util/assets1/news.pdf';





class Newscontent extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    render(){

        const { pageNumber, numPages } = this.state;

        return(
            <div>
                {/* <Document
                file={News}
                onLoadSuccess={this.onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p> */}
                {/* <Document file={News} /> */}
            </div>
        );
    }
}


export default Newscontent;