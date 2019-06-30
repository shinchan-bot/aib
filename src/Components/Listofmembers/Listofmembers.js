import React from 'react'
import ReactDom from  'react-dom';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';




const Listofmembers = () => {
    return(
        <div className='list_of_members'>
            <p className="center f2 fw6">LIST OF MANAGEMENT COMMITEE</p>
            <div className='members mt2 shadow-4'>
                <div className="member bb bw1 b--gray  shadow-4 br2">
                    <p className='member_name red fw6'>SH. SURENDER PRATAP </p>
                    <p className='member_name fw7'>Chief Patron</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. KULDIP KUMAR KHANDUJA</p>
                    <p className='member_name fw7'>Patron</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. ANANT NATH SINGH</p>
                    <p className='member_name fw7'>President of AIBTMF</p>
                    <p></p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH.DEVENDRA BHAI PRAJAPATI</p>
                    <p className='member_name fw7'>President of AIBTMF</p>
                    <p>State Gujarat</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. VIJAY KUMAR GOEL</p>
                    <p className='member_name fw7'>General Secretary of AIBTMF</p>
                    <p>State Uttar Pradesh</p>
                </div>
                <div className="member bb bw1 b--gray shadow-4 br2">
                    <p className='member_name red fw6'>SH. MANISH GUPTA</p>
                    <p className='member_name fw7'>Treasurer of AIBTMF</p>
                    <p>State Uttar Pradesh</p>
                </div>
                <table className='table'>
                    <tr className="bb bw2 b--gray shadow-5">
                        <th>Name</th>
                        <th>Designation</th>
                        <th>State</th>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td>Sh. Ashok Kumar Tiwari</td>
                        <td>VICE President of AIBTMF</td>
                        <td>West Bengal</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td>Sh. Mukesh Nanda</td>
                        <td>Secretary of AIBTMF</td>
                        <td>Punjab</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td>Sh. S.P. Jeyraj</td>
                        <td>Secretary of Organisation</td>
                        <td>Tamil Nadu</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td>SH. Sanjeev Chawdhary</td>
                        <td>Secretary of Legal Cell</td>
                        <td>Uttar Pradesh</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td>Sh. Surinder K. Singla</td>
                        <td>Secretary of Environment</td>
                        <td>Punjab</td>
                    </tr>
                    <tr className=" b--gray shadow-5">
                        <td>Sh. Rattan Aggarwal Ganesh Gadhiya</td>
                        <td>Secretary of Technology</td>
                        <td>Rajasthan</td>
                    </tr>
                </table>
            </div>
            
        </div>

    )
}

export default Listofmembers;