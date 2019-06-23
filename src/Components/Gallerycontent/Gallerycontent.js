import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';


import '../../util/css/app.css';
import Demoimage from '../../util/assets1/gallery_demo_image.jpg';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import o from '../../util/assets1/1.jpg';
var ReactDOM = require('react-dom');



class Gallerycontent extends Component {
    render() {
        const {onChange, onClickItem, onClickThumb} = Carousel;
        return(
            <div className='gallery_content bg-white'>
                <p className='f2 fw6 gallery_header ba pa0 ma0 b--black'>GALLERY</p>
                <div className='gallery_combine_div'>
                    <div className="gallery_list ba b--black">
                    
                    </div>
                    <div className='gallery_slides ba b--black'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Demoimage}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Demoimage}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='bg-red'>
                                <img
                                className="d-block w-100"
                                src={Demoimage}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Gallerycontent;