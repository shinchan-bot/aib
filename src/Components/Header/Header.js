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
        <div className=''>
            <div className="language_nav  b--white">
                <p className="white ma2 pa2  pointer link dim b--white">Font</p>
                <p className="white ma2 pa2  pointer link dim b--white">English</p>
            </div>
            <hr/>
            <div className="header_div11  pa2 b--white">
                <Link to="/home" exact >
                    <img className="logo link pointer" src={Logo}/>
                </Link>
                <div className="header_div12  pa2 b--white">
                    <p className="white header" id="header">AIBTMF</p>
                    <p className="white header">All India Brick and Tile Manufacturing Federation</p>
                </div>
            </div>
            <div className="nav  b--white">
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">Management </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">Members </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">Innovations </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">News </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">Meetings </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">Gallery </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>
                <div className="dropdown  b--white ">
                    <span className="white pointer link ">Contact Us </span>
                    <div className="dropdown_content ba ">
                        <p className="pointer dim link option">Option 1</p>
                        <p className="pointer dim link option">Option 2</p>
                        <p className="pointer dim link option">Option 3</p>
                        <p className="pointer dim link option">Option 4</p>
                    </div>
                </div>             
                                
            </div>
            
             
                

            
        </div>
    )
}


export default Header;
