import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import '../../util/css/app.css';
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import Location from '../../util/assets1/location.png';
import Slide from '../../util/assets1/slide1.png';
import o from '../../util/assets1/1.jpg';
import Demo from '../Demo/Demo';
var ReactDOM = require('react-dom');





class Homecontent extends Component{
    render(){
        const {onChange, onClickItem, onClickThumb} = Carousel;
        return(
            <div className="home_content">
                <Carousel className="homecontent" showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    <div className="home_slide_div mt5">
                        <div className=''>
                            <h1 className='silde_header' id="slide_header">How to choose Bricks?</h1>
                            <p className='slide_text'>The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>    
                        </div>
                        <img className='slide_image' src={Brick}/>  
                    </div>
                    <div className="home_slide_div mt5">
                        <div className=''>
                            <h1 className='silde_header fw6' id="slide_header">How to choose Bricks?</h1>
                            <p className='slide_text'>The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>    
                        </div>
                        <img className='slide_image' src={Brick}/>  
                    </div>
                    <div className="home_slide_div mt5">
                        <div className=''>
                            <h1 className='silde_header' id="slide_header">How to choose Bricks?</h1>
                            <p className='slide_text'>The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>    
                        </div>
                        <img className='slide_image' src={Brick}/>  
                    </div>
                    <div className="home_slide_div mt5">
                        <div className=''>
                            <h1 className='silde_header' id="slide_header">How to choose Bricks?</h1>
                            <p className='slide_text'>The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>    
                        </div>
                        <img className='slide_image' src={Brick}/>  
                    </div>
                    <div className="home_slide_div mt5">
                        <div className=''>
                            <h1 className='silde_header' id="slide_header">How to choose Bricks?</h1>
                            <p className='slide_text'>The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>    
                        </div>
                        <img className='slide_image' src={Brick}/>  
                    </div>
                </Carousel>
    
    
                <div className="about pa2 bg-white">
                    <h2 className='center'>ABOUT</h2>
                    <h3 className='center'>ALL INDIA BRICK AND TILE MANUFACTURING FEDERATION</h3>
                    <p className='w-60 fw5 about_text'>We represent the Brick and tile manufacturers of India.
                        We aim to inspire contemporary brick architecture and building design in all areas of the built environment: commercial, residential and landscape.
                        f you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                    </p>
                    <div className='about_profile_div'>
                        <img src={Face} />
                        <div className="about_profile">
                            <p>Name</p>
                            <p>President</p>
                            <p>AIBTM</p>
                        </div>
                        <img src={Face} />
                        <div className="about_profile">
                            <p>Name</p>
                            <p>President</p>
                            <p>AIBTM</p>
                        </div>
                        <img src={Face} />
                        <div className="about_profile">
                            <p>Name</p>
                            <p>President</p>
                            <p>AIBTM</p>
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className='footer_leftdiv'>
                        <img className='logo2 mt3' src={Logo} />
                        <p className="ml4">
                            All India Brick & Tile Manufacturers Federation (AIBTMF)
                            Zone 6A, 3rd Floor, Indian Habitat Centre
                            Lodhi Road, New Delhi, India
                            011-24641853, 41504740<br/>
    
                            <b>Contact Person:-</b>
                            Sh. R. K. Verma (Executive Secretary)
                            Email: aibtmf@rediffmail.com
                        </p>
    
                    </div>
                    <div className=' ba b--black rightdiv'>
                        <Link to="/location" exact target="_blank">
                            <img className="location" target="_blank" src={Location} />
                        </Link>
                    </div>
    
                </footer>
    
            </div> 
        )

    }  
}

export default Homecontent;