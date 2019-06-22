import React from 'react';
import Tachyons from 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import '../../util/css/app.css';
import o from '../../util/assets1/1.jpg';
import Logo from '../../util/assets1/brick-logo.jpg'
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';




const Header = () => {
    return(
        <div className='mb3 main_header'>
            <div className="language_nav  b--white">
                <p className="white ma2 pa2  pointer link dim  b--white">Font = Press CTRL [ +, - ]</p>
                <p className="white ma2 pa2  pointer link dim  b--white">English</p>
            </div>
            <hr/>
            <div className="header_div11  pa2  b--white">
                <Link to="/" exact >
                    <img className="logo link pointer" src={Logo}/>
                </Link>
                <div className="header_div12  pa2  b--white">
                    <p className="white header" id="header">AIBTMF</p>
                    <p className="white header">All India Brick and Tile Manufacturing Federation</p>
                </div>
            </div>
            <div className="nav mt4  b--white">
                <div className="dropdown  b--white ">
                    <Link to='/'>
                        <button className="white pointer fw6 grow">Home</button>
                    </Link>
                </div>
                <div className="dropdown   b--white ">
                    <button className="white  fw6  grow">Management</button>
                    <div className="dropdown_content  b--white ">
                        <Link to='/listofmembers'>
                            <p className="pointer dim link option">Management Committee</p>
                        </Link>
                        <Link>
                            <p className="pointer dim link option">List of Executives</p>
                        </Link>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <button className="white  fw6  grow">Members</button>
                    <div className="dropdown_content  b--white ">
                        <Link>
                            <p className="pointer dim link option">Application Form</p>
                        </Link>
                        <Link>
                            <p className="pointer dim link option">List of Life Members</p>
                        </Link>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <button className="white  fw6  grow">Innovations</button>
                    <div className="dropdown_content  b--white ">
                        <Link to='/machines'>
                            <p className="pointer dim link option">Machines</p>
                        </Link>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <button className="white  fw6  grow">News</button>
                    <div className="dropdown_content  b--white ">
                        <p className="pointer dim link option">Articles</p>
                        <p className="pointer dim link option">News</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <Link to='/listofmeetings'>
                        <button className="white pointer fw6  grow ">Meetings</button>
                    </Link>
                </div>
                <div className="dropdown  b--white ">
                    <Link to='/gallery'>
                        <button className="white pointer fw6  grow ">Gallery</button>
                    </Link>
                </div>
                <div className="dropdown  b--white ">
                    <Link to='/contactus'>
                        <button className="white pointer fw6 grow">Contact Us</button>
                    </Link>
                </div>             
                                
            </div>
            
             
                

            
        </div>
    )
}


export default Header;
