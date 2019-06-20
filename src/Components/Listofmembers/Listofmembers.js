import React from 'react'
import ReactDom from  'react-dom';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const Listofmembers = () => {
    return(
        <div className='list_of_members'>
            <h1 className="center">LIST OF MANAGEMENT COMMITTEE</h1>
            <table className='table'>
                <tr className="">
                    <td>Sh. Surender Pratap</td>
                    <td>Chief Patron</td>
                </tr>
                <tr>
                    <td>Sh. Kuldeep Kumar Khanduja</td>
                    <td>Patron</td>
                </tr>
                <tr>
                    <td>Sh. Anant Nath Singh</td>
                    <td>Patron</td>
                </tr>
            </table>
            <div className='members mt5'>
                <div className="member ba b--black">
                    <h3 className='red'>SH.DEVENDRA BHAI PRAJAPATI</h3>
                    <p>President of AIBTMF</p>
                    <p>State Gujarat</p>
                </div>
                <div className="member ba b--black">
                    <h3 className='red'>SH. VIJAY KUMAR GOEL</h3>
                    <p>General Secretary of AIBTMF</p>
                    <p>State Uttar Pradesh</p>
                </div>
                <div className="member ba b--black">
                    <h3 className='red'>SH. MANISH GUPTA</h3>
                    <p>Treasurer of AIBTMF</p>
                    <p>State Uttar Pradesh</p>
                </div>
                <div className="member ba b--black">
                    <h3 className='red'>Name</h3>
                    <p>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <h3 className='red'>Name</h3>
                    <p>Designation</p>
                    <p>State</p>
                </div>
                <div className="member ba b--black">
                    <h3 className='red'>Name</h3>
                    <p>Designation</p>
                    <p>State</p>
                </div>

            </div>
            
        </div>

    )
}

export default Listofmembers;