import React from 'react';
import 'tachyons';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';

// import * as translationEN from '../../translations/en.json';
// import * as translationHIN from '../../translations/hindi.json';
// import * as translationPUN from '../../translations/punjabi.json';
// import * as translationGUJ from '../../translations/gujarati.json';
// import * as translationMAR from '../../translations/marathi.json';



import '../../util/css/app.css';









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

          {this.props.images}
          
        </Carousel>
      );
    }
  }
  
export default Galleryslides;