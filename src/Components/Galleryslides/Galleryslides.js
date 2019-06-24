import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';


import '../../util/css/app.css';
import Demoimage from '../../util/assets1/about-us.png';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import o from '../../util/assets1/1.jpg';
var ReactDOM = require('react-dom');









class Galleryslides extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-70"
              src={Demoimage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Nepal Visit : 29-04-2019</h3>
              <p>(Some Description)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src={Demoimage}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Nepal Visit : 29-04-2019</h3>
              <p>(Some Description)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src={Demoimage}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Nepal Visit : 29-04-2019</h3>
              <p>(Some Description)</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default Galleryslides;