import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
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
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import Location from '../../util/assets1/location.png';
import o from '../../util/assets1/1.jpg';
import Demoimage from '../../util/assets1/gallery_demo_image.jpg';
import Demo from '../Demo/Demo';
import Twitter from '../../util/assets1/twitter.svg';
import Facebook from '../../util/assets1/facebook.svg';
var ReactDOM = require('react-dom');





class Homeslides extends Component{
    render(){
        return(
           <MyContext.Consumer>
               {(context)=>(
                   <React.Fragment>
                       {(()=>{
                           if(context.state.language === 'hindi'){
                               return(
                                <div className="home_content">
                                    <Carousel>
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header w-40 f2 fw7'>
                                                   {translationHIN.home_slides.title1}
                                                </p>
                                                <p className='home_slide_text w-50 fw7 f4'>
                                                {translationHIN.home_slides.detail1}
                                                </p>
                                            </div>  
                                            <img className='home_slide_image' src={Brick2} />                    
                                        </div>
                                        <div className='home_slide_div' id='bg2'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header f2 fw7'>
                                                    {translationHIN.home_slides.title2}
                                                </p>
                                                <p className='home_slide_text fw7 f4'>
                                                    {translationHIN.home_slides.detail2}
                                                </p>
                                            </div>  
                                        </div>
                                        <div className='home_slide_div' id='bg3'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header f2 fw7'>
                                                    {translationHIN.home_slides.title3}
                                                </p>
                                                <p className='home_slide_text fw7 f4'>
                                                    {translationHIN.home_slides.detail3}
                                                </p>
                                            </div>  
                                        </div>
                                    </Carousel>     
                                </div>

                               );
                           }else{
                            return(
                                <div className="home_content">
                                    <Carousel>
                                        <div className='home_slide_div' id='bg3'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header underline w-40 f2 fw7'>
                                                    How to choose Bricks?
                                                </p>
                                                <p className='home_slide_text w-50 fw7 f4'>
                                                    The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.
                                                </p>
                                            </div>  
                                            <img className='home_slide_image w-30' src={Brick2} />                    
                                        </div> 
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header underline f2 fw7'>
                                                    Brick Making : One of the Oldest Profession
                                                </p>
                                                <p className='home_slide_text fw7 f4'>
                                                    Man has used brick for building purpose for thousands of years. Bricks date back to 7000 BC, which makes them one of the oldest known building materials. They were discovered in southern Turkey at the site of an ancient settlement around the city of Jericho.<br/><br/> 

                                                    The first bricks, made in areas with warm climates, were mud bricks dried in the sun for hardening. 
                                                    Ancient Egyptian bricks were made of clay mixed with straw. The evidence of this can be seen today at ruins of Harappa Buhen and Mohenjo-daro. Paintings on the tomb walls of Thebes portray Egyptian slaves mixing, tempering and carrying clay for the sun dried bricks. 
                                                </p>
                                            </div>  
                                        </div> 
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header underline f2 fw7'>
                                                    Brick Calculator
                                                </p>
                                                <p className='home_slide_text  fw7 f4'>
                                                    Our online tools will provide quick answers to your calculation and conversion needs. On this page, you can calculate the number of bricks and amount of mortar required for a given wall area. Once the quantities are known, it is easy to estimate the cost with the rates prevailing in your area.                                               
                                                </p>
                                                <form className='message_form ml4 b--black'>
                                                <div className='message_form2 ml4'>
                                                    <div className='w-40 mh2'>
                                                        <p className='fw6 ml1 red white'>Height of Wall</p>
                                                        <input className='input red w-100 ' type='text' name='name' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40'>
                                                        <p className='fw6 ml1 red white'>Length of Wall</p>
                                                        <input className='input red w-100' type='email' name='email' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40 ml2'>
                                                        <p className='fw6 ml1 green white'>No. of bricks</p>
                                                        <input className='input green w-100' type='email' name='email' placeholder='No.' value={'1000'+'  Bricks'} />
                                                    </div>
                                                    
                                                </div>
                                                </form>
                                            </div>  
                                        </div>                                        
                                    </Carousel>     
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

export default Homeslides;