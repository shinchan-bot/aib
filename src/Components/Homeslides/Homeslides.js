import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';


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
            <div className="home_content">
                <Carousel>
                    <div className='home_slide_div' id='bg1'>
                        <div className='home_slide_text_div'>
                            <p className='home_slide_header f2 fw7'>
                                How to choose Bricks?
                            </p>
                            <p className='home_slide_text fw7 f4'>
                                The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.
                            </p>
                        </div>  
                        <img className='home_slide_image' src={Brick2} />                    
                    </div>
                    <div className='home_slide_div' id='bg2'>
                        <div className='home_slide_text_div'>
                            <p className='home_slide_header f2 fw7'>
                                How to choose Bricks?
                            </p>
                            <p className='home_slide_text fw7 f4'>
                                The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.
                            </p>
                        </div>  
                        <img className='home_slide_image w-30' src={Brick2} />                    
                    </div>
                    <div className='home_slide_div' id='bg3'>
                        <div className='home_slide_text_div'>
                            <p className='home_slide_header f2 fw7'>
                                How to choose Bricks?
                            </p>
                            <p className='home_slide_text fw7 f4'>
                                The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.
                            </p>
                        </div>  
                        <img className='home_slide_image w-30' src={Brick2} />                    
                    </div>
                    <div className='home_slide_div' id='bg4'>
                        <div className='home_slide_text_div'>
                            <p className='home_slide_header f2 fw7'>
                                How to choose Bricks?
                            </p>
                            <p className='home_slide_text fw7 f4'>
                                The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.
                            </p>
                        </div>  
                        <img className='home_slide_image w-30' src={Brick2} />                    
                    </div>
                    <div className='home_slide_div' id='bg5'>
                        <div className='home_slide_text_div'>
                            <p className='home_slide_header f2 fw7'>
                                How to choose Bricks?
                            </p>
                            <p className='home_slide_text fw7 f4'>
                                The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.
                            </p>
                        </div>  
                        <img className='home_slide_image w-30' src={Brick2} />                    
                    </div>      
                </Carousel>     
            </div> 
        )

    }  
}

export default Homeslides;