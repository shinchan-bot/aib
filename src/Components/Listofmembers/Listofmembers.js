import React from 'react'
import ReactDom from  'react-dom';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const Listofmembers = () => {
    return(
        <div className='list_of_members'>
            <p className="center f2 fw6">LIST OF MANAGEMENT COMMITEE</p>
            <div className='members mt2'>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>SH.DEVENDRA BHAI PRAJAPATI</p>
                    <p className='member_name fw7'>President of AIBTMF</p>
                    <p>State Gujarat</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>SH. VIJAY KUMAR GOEL</p>
                    <p className='member_name fw7'>General Secretary of AIBTMF</p>
                    <p>State Uttar Pradesh</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>SH. MANISH GUPTA</p>
                    <p className='member_name fw7'>Treasurer of AIBTMF</p>
                    <p>State Uttar Pradesh</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>Name</p>
                    <p className='member_name fw7'>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>Name</p>
                    <p className='member_name fw7'>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>Name</p>
                    <p className='member_name fw7'>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>Name</p>
                    <p className='member_name fw7'>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>Name</p>
                    <p className='member_name fw7'>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <p className='member_name red fw6'>Name</p>
                    <p className='member_name fw7'>Designation</p>
                    <p>State</p>
                </div>

            </div>
            
        </div>

    )
}

export default Listofmembers;