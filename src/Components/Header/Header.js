import React from 'react';
import Tachyons from 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


import '../../util/css/app.css';
import o from '../../util/assets1/1.jpg';
import Logo from '../../util/assets1/brick-logo.png'
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';
import Languagenav from '../Languagenav/Languagenav';
import News from '../../util/assets1/news.pdf'




const Header = (props) => {
    return(
        <MyContext.Consumer>
            {(context)=>(
                <React.Fragment>
                    {(()=>{
                        if(context.state.language === 'hindi'){
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">{translationHIN.header.title}</p>
                                            <p className="white header">{translationHIN.header.header}</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 grow">{translationHIN.header.nav.option1}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  grow">{translationHIN.header.nav.option2}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/listofmembers'>
                                                    <p className="pointer dim link mt1 optionnew">{translationHIN.header.nav.suboption1}</p>
                                                </Link>
                                                <Link>
                                                    <p className="pointer dim link optionnew">{translationHIN.header.nav.suboption2}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationHIN.header.nav.option3}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link>
                                                    <p className="pointer dim mt1 link optionnew">{translationHIN.header.nav.suboption3}</p>
                                                </Link>
                                                <Link>
                                                    <p className="pointer dim link optionnew">{translationHIN.header.nav.suboption4}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationHIN.header.nav.option4}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">{translationHIN.header.nav.suboption5}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">{translationHIN.header.nav.option5}</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <p className="pointer dim link  mt1 optionnew">{translationHIN.header.nav.suboption6}</p>
                                                <p className="pointer dim link optionnew">{translationHIN.header.nav.suboption7}</p>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6  grow ">{translationHIN.header.nav.option6}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6  grow ">{translationHIN.header.nav.option7}</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 grow">{translationHIN.header.nav.option8}</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                </div>

                            );
                        }else{
                            return(
                                <div className='mb0 main_header'>
                                    <div className="language_nav  b--white">
                                        <Languagenav context={props.context}/>
                                    </div>
                                    <hr/>
                                    <div className="header_div11  pa2  b--white">
                                        <Link to="/" exact >
                                            <img className="logo link  pointer" src={Logo}/>
                                        </Link>
                                        <div className="header_div12  pa2  b--white">
                                            <p className="white header" id="header">AIBTMF</p>
                                            <p className="white header">All India Brick and Tile Manufacturing Federation</p>
                                        </div>
                                    </div>
                                    <div className="nav mt2 pb3 b--white">
                                        <div className="dropdown  b--white ">
                                            <Link to='/'>
                                                <button className="white pointer fw6 grow">Home</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew   b--white ">
                                            <button className="white  fw6  grow">Management</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/listofmembers'>
                                                    <p className="pointer dim link mt1 optionnew">Management Committee</p>
                                                </Link>
                                                <Link>
                                                    <p className="pointer dim link optionnew">List of Executives</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">Members</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link>
                                                    <p className="pointer dim mt1 link optionnew">Application Form</p>
                                                </Link>
                                                <Link>
                                                    <p className="pointer dim link optionnew">List of Life Members</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">Innovations</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <Link to='/machines'>
                                                    <p className="pointer dim link mt1 optionnew">Machines</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <button className="white  fw6  grow">News</button>
                                            <div className="dropdown_contentnew  b--white ">
                                                <p className="pointer dim link  mt1 optionnew">Articles</p>
                                                <a href={News} download={News}>
                                                    <p className="pointer dim link mt1 center optionnew">News</p> 
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/listofmeetings'>
                                                <button className="white pointer fw6  grow ">Meetings</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/gallery'>
                                                <button className="white pointer fw6  grow ">Gallery</button>
                                            </Link>
                                        </div>
                                        <div className="dropdownnew  b--white ">
                                            <Link to='/contactus'>
                                                <button className="white pointer fw6 grow">Contact Us</button>
                                            </Link>
                                        </div>             
                                                        
                                    </div>
                                </div>
                                
                            );
                        }
                    })()}
                </React.Fragment>
            )}
        </MyContext.Consumer>
    )
}


export default Header;