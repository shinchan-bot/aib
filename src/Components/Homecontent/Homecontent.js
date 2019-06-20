import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';




import '../../util/css/app.css';
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import Location from '../../util/assets1/location.png';
import o from '../../util/assets1/1.jpg';
import Demo from '../Demo/Demo';




const Homecontent = () => {
    return(
        <div className="homecontent">
            <div className = 'slides  b--white pa2'>
                <div className="scroll_div  b--yellow pa2">
                    <div className="slide pa2  b--white">
                        <div className='slide_text'>
                            <p className="f1 fw6 slide_header" id="slide_header">How to choose bricks?</p>
                            <p className="white f3 slide_header">The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>
                        </div> 
                        <img src={Brick} className='slide_bricks' />
                    </div>
                </div>                 
            </div>

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

export default Homecontent;