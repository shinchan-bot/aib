    <Members/>
      <Workes/>
      <Meetings/>
      <Gallery/>    


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


<table className='table'>
                <tr className="">
                    <td>Sh. Surender Pratap</td>
                    <td>Chief Patron</td>
                </tr>
                <tr>
                    <td>Sh. Kuldeep Kumar Khanduja</td>
                    <td>Patron</td>
                </tr>
                <tr>
                    <td>Sh. Anant Nath Singh</td>
                    <td>Patron</td>
                </tr>
            </table>


      28.590302, 77.225778

      AIzaSyCLTxXcdTNqSA01d6NPn1zdFXauMaYDUKM

        <div className="slide pa2 ba b--white">
            <div className='slide_text'>
                <p className="f1 fw6 slide_header" id="slide_header">How to choose bricks?</p>
                <p className="white f3 slide_header">The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>
            </div> 
            <img src={Brick} className='slide_bricks' />
        </div>





import React, {Component} from 'react'
import ReactDom from  'react-dom';
import 'tachyons';

import {meetings} from '../../Helpers/meetings';





const meeting_array = meetings.map((user,num) =>{
    return(
        <div key={num} onClick={meeting_handler}  className="ba b--black">
            <p className="red">{meetings[num].date}</p>
            <p data-key={num} className="meet">{meetings[num].description}</p>
        </div> 
    );           
});


const meeting_detail = (e) => {
    
}


class Listofmeetings extends Component {
        
    state = {
        num:'0',
    }


    meeting_handler = (e) =>{
        return(
            this.setState({num : e.target.getAttribute('data-key') })
    
        );
    }


    render(){
        
        return(
            <div className='meetings ba b--black pa2'>
                <h1>
                    MEETINGS
                </h1>
                <div className="meeting_box_combine ba b--black" >
                    <div className="meeting_details ba b--black">
                        <h3>{meetings[this.state.num].title}</h3>
                        <p className='red'>{meetings[this.state.num].description}</p>
                        <p>{meetings[this.state.num].details}</p>
                    </div>
                    <div className="meeting_list_box ba b--black">
                        <h3>Meetings in the past.</h3>
                        {meeting_array}
                    </div>
                </div>
            </div>
    
        )

    }
   
}

export default Listofmeetings;












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
import Twitter from '../../util/assets1/twitter.svg';
import Facebook from '../../util/assets1/facebook.svg';
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
                    <h2 className='center f2'>ABOUT</h2>
                    <h3 className='center f3'>ALL INDIA BRICK AND TILE MANUFACTURING FEDERATION</h3>
                    <p className='w-60 fw6 about_text'>We represent the Brick and tile manufacturers of India.
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
                    <div className='modified_left_div'>
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
                        <div className='share_div'>
                            <img className='share_link' src={Twitter}/>
                            <img className='share_link' src={Facebook}/>
                        </div>
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














.home_slide_div{
    height: 400px;
    background: transparent;
  }

  .home_slide_header{
      position: relative;
      z-index: 100000;
      color: black;
      margin-top: 20px;
      left: 10%;
      width: 40%;
      font-family: AvenirNext;
      border: transparent;
  }
  .home_slide_text{
      color:white;
      position: relative;
      z-index: 100000;
      left: 10%;
      width: 50%;
      text-align: justify;
      font-family: AvenirNext;
  }
  .home_slide_image{
      position: relative !important;
      top: -150px;
      left: 70%;
      width: 250px !important;
      height: 200px;
  }






















  
  .notfound{
    text-align: justify;
}
.notfound2{
      text-align: center;
}


.gallery_content{
  display: flex;
  flex-direction: column;
}
.gallery_header{
    text-align: center;
}

.gallery_combine_div{
    display: flex;
    justify-content: space-around;
}

.gallery_list{
    width: 30%;
    height: 400px;
    margin-left:2%;
}
.gallery_slides{
    width: 50%;
    height: 300px;
}

.gallery_slide_image{
    
}



