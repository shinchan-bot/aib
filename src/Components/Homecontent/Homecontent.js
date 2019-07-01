import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import '../../util/css/app.css';
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Brick2 from '../../util/assets1/brick.png';
import Back from '../../util/assets1/transparent.png';
import Face1 from '../../util/assets1/president.jpg';
import Face2 from '../../util/assets1/face2.jpg';
import Face3 from '../../util/assets1/face3.png';
import Logo from '../../util/assets1/brick-logo.png';
import Location from '../../util/assets1/location.png';
import Demoimage from '../../util/assets1/gallery_demo_image.jpg';
import Twitter from '../../util/assets1/twitter.svg';
import Facebook from '../../util/assets1/facebook.svg';
import Homeslides from '../Homeslides/Homeslides';





class Homecontent extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){
                                return(
                                    <div className="home_content ">
                                        <Homeslides/> 
                                        <div className="about pa2 bg-white">
                                            <h2 className='center f2 fw6'>{translationHIN.home_content.title}</h2>
                                            <h3 className='center f3 fw6'>{translationHIN.home_content.header}</h3>
                                            <p className='w-60 fw6 about_text'>{translationHIN.home_content.purpose} </p>
                                            <div className='about_profile_div '>
                                                <img className="home_face" src={Face1} />
                                                <div className="about_profile">
                                                    <p className=' '>{translationHIN.home_content.name1}</p>
                                                    <p className='home_designation fw7'>{translationHIN.home_content.designation1}</p>
                                                    <p className='fw7'>{translationHIN.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face2} />
                                                <div className="about_profile">
                                                    <p className=''>{translationHIN.home_content.name2}</p>
                                                    <p className='home_designation fw7'>{translationHIN.home_content.designation2}</p>
                                                    <p className='fw7'>{translationHIN.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face3} />
                                                <div className="about_profile">
                                                    <p className='  '>{translationHIN.home_content.name3}</p>
                                                    <p className='home_designation fw7'>{translationHIN.home_content.designation3}</p>
                                                    <p className='fw7'>{translationHIN.header.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <footer className='footer'>
                                            <div className='modified_left_div'>
                                                <div className='footer_leftdiv w-100'>
                                                    <img className='logo2 mt3' src={Logo} />
                                                    <p className="ml4 w-70">{translationHIN.home_content.address_line1}
                                                        <br/>
                                                        <b>{translationHIN.home_content.address_line2} </b><br/>
                                                        {translationHIN.home_content.address_line3}
                                                    </p>
                                                </div>
                                                <div className='share_div'>
                                                    <img className='share_link' src={Twitter}/>
                                                    <img className='share_link' src={Facebook}/>
                                                </div>
                                            </div>
                                            <div className=' w-100 b--black footer_rightdiv'>
                                                <Link to="/location" exact target="_blank">
                                                    <img className="location" target="_blank" src={Location} />
                                                </Link>
                                            </div>

                                        </footer>
                            
                                    </div>
                                );
                            }if(context.state.language === 'hindi'){
                                return(
                                    <div className="home_content ">
                                        <Homeslides/> 
                                        <div className="about pa2 bg-white">
                                            <h2 className='center f2 fw6'>{translationHIN.home_content.title}</h2>
                                            <h3 className='center f3 fw6'>{translationHIN.home_content.header}</h3>
                                            <p className='w-60 fw6 about_text'>{translationHIN.home_content.purpose} </p>
                                            <div className='about_profile_div '>
                                                <img className="home_face" src={Face1} />
                                                <div className="about_profile">
                                                    <p className=' '>{translationHIN.home_content.name1}</p>
                                                    <p className='home_designation fw7'>{translationHIN.home_content.designation1}</p>
                                                    <p className='fw7'>{translationHIN.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face2} />
                                                <div className="about_profile">
                                                    <p className=''>{translationHIN.home_content.name2}</p>
                                                    <p className='home_designation fw7'>{translationHIN.home_content.designation2}</p>
                                                    <p className='fw7'>{translationHIN.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face3} />
                                                <div className="about_profile">
                                                    <p className='  '>{translationHIN.home_content.name3}</p>
                                                    <p className='home_designation fw7'>{translationHIN.home_content.designation3}</p>
                                                    <p className='fw7'>{translationHIN.header.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <footer className='footer'>
                                            <div className='modified_left_div'>
                                                <div className='footer_leftdiv w-100'>
                                                    <img className='logo2 mt3' src={Logo} />
                                                    <p className="ml4 w-70">{translationHIN.home_content.address_line1}
                                                        <br/>
                                                        <b>{translationHIN.home_content.address_line2} </b><br/>
                                                        {translationHIN.home_content.address_line3}
                                                    </p>
                                                </div>
                                                <div className='share_div'>
                                                    <img className='share_link' src={Twitter}/>
                                                    <img className='share_link' src={Facebook}/>
                                                </div>
                                            </div>
                                            <div className=' w-100 b--black footer_rightdiv'>
                                                <Link to="/location" exact target="_blank">
                                                    <img className="location" target="_blank" src={Location} />
                                                </Link>
                                            </div>

                                        </footer>
                            
                                    </div>
                                );
                            }else if(context.state.language === 'gujarati'){
                                return(
                                    <div className="home_content ">
                                        <Homeslides/> 
                                        <div className="about pa2 bg-white">
                                            <h2 className='center f2 fw6'>{translationGUJ.home_content.title}</h2>
                                            <h3 className='center f3 fw6'>{translationGUJ.home_content.header}</h3>
                                            <p className='w-60 fw6 about_text'>{translationGUJ.home_content.purpose} </p>
                                            <div className='about_profile_div '>
                                                <img className="home_face" src={Face1} />
                                                <div className="about_profile">
                                                    <p className=' '>{translationGUJ.home_content.name1}</p>
                                                    <p className='home_designation fw7'>{translationGUJ.home_content.designation1}</p>
                                                    <p className='fw7'>{translationGUJ.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face2} />
                                                <div className="about_profile">
                                                    <p className=''>{translationGUJ.home_content.name2}</p>
                                                    <p className='home_designation fw7'>{translationGUJ.home_content.designation2}</p>
                                                    <p className='fw7'>{translationGUJ.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face3} />
                                                <div className="about_profile">
                                                    <p className='  '>{translationGUJ.home_content.name3}</p>
                                                    <p className='home_designation fw7'>{translationGUJ.home_content.designation3}</p>
                                                    <p className='fw7'>{translationGUJ.header.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <footer className='footer'>
                                            <div className='modified_left_div'>
                                                <div className='footer_leftdiv w-100'>
                                                    <img className='logo2 mt3' src={Logo} />
                                                    <p className="ml4 w-70">{translationGUJ.home_content.address_line1}
                                                        <br/>
                                                        <b>{translationGUJ.home_content.address_line2} </b><br/>
                                                        {translationGUJ.home_content.address_line3}
                                                    </p>
                                                </div>
                                                <div className='share_div'>
                                                    <img className='share_link' src={Twitter}/>
                                                    <img className='share_link' src={Facebook}/>
                                                </div>
                                            </div>
                                            <div className=' w-100 b--black footer_rightdiv'>
                                                <Link to="/location" exact target="_blank">
                                                    <img className="location" target="_blank" src={Location} />
                                                </Link>
                                            </div>

                                        </footer>
                            
                                    </div>
                                );
                            }else{
                                return(
                                    <div className="home_content">
                                        <Homeslides/> 
                                        <div className="about pa2 bg-white ">
                                            <h2 className='center f2 fw6'>{translationEN.home_content.title}</h2>
                                            <h3 className='center f3 fw6 underline'>{translationEN.home_content.header}</h3>
                                            <p className='w-60 fw6 about_text'>
                                                {translationEN.home_content.purpose}
                                            </p>
                                            <div className='about_profile_div '>
                                                <img className="home_face " src={Face1} />
                                                <div className="about_profile">
                                                    <p className=''>{translationEN.home_content.name1}</p>
                                                    <p className='home_designation fw7'>{translationEN.home_content.designation1}</p>
                                                    <p className='fw7'>{translationEN.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face2} />
                                                <div className="about_profile">
                                                    <p className=''>{translationEN.home_content.name2}</p>
                                                    <p className='home_designation fw7'>{translationEN.home_content.designation2}</p>
                                                    <p className='fw7'>{translationEN.header.title}</p>
                                                </div>
                                                <img className="home_face" src={Face3} />
                                                <div className="about_profile">
                                                    <p className=''>{translationEN.home_content.name3}</p>
                                                    <p className='home_designation fw7'>{translationEN.home_content.designation3}</p>
                                                    <p className='fw7'>{translationEN.header.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <footer className='footer'>
                                            <div className='modified_left_div'>
                                                <div className='footer_leftdiv w-100'>
                                                    <img className='logo2 mt3' src={Logo} />
                                                    <p className="ml4 w-70">
                                                        {translationEN.home_content.address_line1}<br/>
                                
                                                        <b>{translationEN.home_content.address_line2}</b><br/>
                                                        {translationEN.home_content.address_line3}
                                                        <br/>
                                                    </p>
                                                </div>
                                                <div className='share_div'>
                                                    <img className='share_link ' src={Twitter}/>
                                                    <img className='share_link' src={Facebook}/>
                                                </div>
                                            </div>
                                            <div className=' w-100 b--black footer_rightdiv'>
                                                <Link to="/location" exact target="_blank">
                                                    <img className="location" target="_blank" src={Location} />
                                                </Link>
                                            </div>

                                        </footer>
                            
                                    </div>
                                );
                            }
                        })()}
                    </React.Fragment>

                )}

            </MyContext.Consumer>
        )

    }  
}

export default Homecontent;