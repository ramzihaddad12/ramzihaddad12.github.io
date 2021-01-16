import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profilepic from './pp.jpg';
import samplePDF from './Ramzi_Haddad_Resume.pdf';

import { Document , Page, pdfjs} from 'react-pdf';
// import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component{
    render(){
        return(
            <div>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src={profilepic}
                    alt="avatar"
                    style={{height: '200px'}}
                     />
                </div>
    
                <h2 style={{paddingTop: '2em'}}>Ramzi Haddad</h2>
                <h4 style={{color: 'grey'}}>Software Developer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Address</h5>
                <p>Beirut, Lebanon</p>
                <h5>Phone</h5>
                <p>+961 71846229</p>
                <h5>Email</h5>
                <p>ramzi.haddad12@gmail.com</p>
                <h5>Web</h5>
                <p><a href = "ramzihaddad12.github.io">ramzihaddad12@github.io</a></p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <Document file={ samplePDF }>
                  <Page pageNumber={1} />
                </Document>
    
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Resume;