import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import {gallery} from '../../Helpers/gallery';


import '../../util/css/app.css';
import Demoimage from '../../util/assets1/about-us.png';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import o from '../../util/assets1/1.jpg';
import Galleryslides from '../Galleryslides/Galleryslides';
var ReactDOM = require('react-dom');




class Gallerycontent extends Component {

    state = {
        index:""
    }




    render() {

        let gallerySlideHandler = (e,data) => {
            this.setState({
                index:e.target.getAttribute("data-key")
            })
            
        }

        let gallery_list = gallery.map((user,num)=> {
            return(
                <div className='gallery_list pointer grow'>
                    <img   className='gallery_list_image' src={gallery[num].url[0]}/>
                    <p key={num} data-key={num} onClick={gallerySlideHandler} className='gallery_list_text f2'>{gallery[num].visit}</p>   
                </div>
            );
        })

        let image_index = this.state.index;

        let gallery_images = gallery[Number(image_index)].url.map((data,i) =>{
            return(
                <Carousel.Item>
                <img
                  className="gallery_slide_image w-70 "
                  src={gallery[Number(image_index)].url[i]}
                  alt="Third slide"
                />
      
                <Carousel.Caption>
                  <h3>{gallery[Number(image_index)].visit}</h3>
                  <p>{gallery[Number(image_index)].description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
        })

        

        return(
            <div className='gallery_content bg-white'>
                <p className='f2 fw6 gallery_header  pa0 ma0 b--black'>GALLERY</p>
                <div className='gallery_combine_div'>
                    <div className="gallery_list_div b--black ">
                        {gallery_list}           
                    </div>
                    <div className='gallery_slides ba b--black '>
                        <Galleryslides images={gallery_images} />
                    </div>  
                </div>
            </div>
        );
    }
}

export default Gallerycontent;