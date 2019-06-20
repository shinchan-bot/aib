import React from 'react';
import Tachyons from 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import '../../util/css/app.css';
import o from '../../util/assets1/1.jpg';
import Logo from '../../util/assets1/brick-logo.jpg'
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';
import Fontchange from '../Fontchange/Fontchange';




const Header2 = () => {
    return(
        <div className='mb4'>
            <div className="language_nav2  b--white">
                <p className="white ma2 pa2 b--white">Font = Press CTRL [ +, - ]</p>
                <p className="white ma2 pa2  pointer link dim b--white">English</p>
            </div>
            <hr/>
            <div className="combine">
                <div className="header_div21  pa2 b--white">
                    <Link to="/home" className="logo">
                        <img className="logo2 link pointer" src={Logo}/>
                    </Link>
                    <div className="header_div22  pa2 b--white">
                        <p className="white header2" id="header2">AIBTMF</p>
                        <p className="white header2">All India Brick and Tile Manufacturing Federation</p>
                    </div>
                </div>
                <div className="nav2  b--white">
                    <Link to="/home" exact>
                        <span className="white pointer link ">Home </span>
                    </Link>
                    <div className="dropdown2  b--white ">
                        <span className="white pointer link ">Management </span>
                        <div className="dropdown_content2 ba ">
                            <Link to="/management">
                                <p className="pointer dim link option2">Management Committe</p>
                            </Link>
                            <p className="pointer dim link option2">List of Executives</p>
                        </div>
                    </div>
                    <div className="dropdown2  b--white ">
                        <span className="white pointer link ">Members </span>
                        <div className="dropdown_content2 ba ">
                            <p className="pointer dim link option2">Application Form</p>
                            <Link to="">
                                <p className="pointer dim link option2">List of Life Members</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown2  b--white ">
                        <span className="white pointer link ">Innovations </span>
                        <div className="dropdown_content2 ba ">
                            <Link to="/innovations">
                                <p className="pointer dim link option2">Machines</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown2  b--white ">
                        <span className="white pointer link ">News </span>
                        <div className="dropdown_content2 ba ">
                            <p className="pointer dim link option2">Articles</p>
                            <Link to="/news">
                                <p className="pointer dim link option2">News</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown2  b--white ">
                        <Link to="/listofmeetings">
                            <span className="white pointer link ">Meetings </span>
                        </Link>
                        <div className="dropdown_content2 ba ">
                            
                        </div>
                    </div>
                    <div className="dropdown2  b--white ">
                        <Link to="/gallery">
                            <span className="white pointer link ">Gallery </span>
                        </Link>
                        <div className="dropdown_content2 ba ">

                        </div>
                    </div>
                    <div className="dropdown2  b--white ">
                        <Link to="/contactus">
                            <span className="white pointer link ">Contact Us </span>
                        </Link>
                        <div className="dropdown_content2 ba ">
                            
                        </div>
                    </div>                             
                </div>
           

            </div>
            
             
                

            
        </div>
    )
}


export default Header2;
