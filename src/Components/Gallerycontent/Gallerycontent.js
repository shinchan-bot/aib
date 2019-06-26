import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';


import '../../util/css/app.css';
import Demoimage from '../../util/assets1/about-us.png';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import o from '../../util/assets1/1.jpg';
import Galleryslides from '../Galleryslides/Galleryslides';
var ReactDOM = require('react-dom');



class Gallerycontent extends Component {
    render() {
        const {onChange, onClickItem, onClickThumb} = Carousel;
        return(
            <div className='gallery_content bg-white'>
                <p className='f2 fw6 gallery_header  pa0 ma0 b--black'>GALLERY</p>
                <div className='gallery_combine_div'>
                    <div className="gallery_list_div b--black">
                        <div className='gallery_list'>
                            <img className='gallery_list_image' src={Demoimage}/>
                            <p className='gallery_list_text f2'>ABD VISIT <br/> (29-04-2019)</p>   
                        </div>
                        <div className='gallery_list'>
                            <img className='gallery_list_image' src={Demoimage}/>
                            <p className='gallery_list_text f2'>ABD VISIT <br/> (29-04-2019)</p>   
                        </div>
                        <div className='gallery_list'>
                            <img className='gallery_list_image' src={Demoimage}/>
                            <p className='gallery_list_text f2'>ABD VISIT <br/> (29-04-2019)</p>   
                        </div>
                        <div className='gallery_list'>
                            <img className='gallery_list_image' src={Demoimage}/>
                            <p className='gallery_list_text f2'>ABD VISIT <br/> (29-04-2019)</p>   
                        </div>
                                              
                    </div>
                    <div className='gallery_slides ba b--black'>
                        <Galleryslides/>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Gallerycontent;