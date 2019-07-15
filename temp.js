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





<a
className="link"
onClick={this.props.context.changeLanguage}
data-language="hindi"
>
Hindi
</a>







background-image: url("../../util/assets1/about-us.png");
    background-size: cover;











    <div className="home_content">
                    <Homeslides/> 
                    <div className="about pa2 bg-white">
                        <h2 className='center f2 fw6'>ABOUT</h2>
                        <h3 className='center f3 fw6'>ALL INDIA BRICK AND TILE MANUFACTURING FEDERATION</h3>
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
                                <p className="ml4 w-70">
                                    All India Brick & Tile Manufacturers Federation (AIBTMF)
                                    Zone 6A, 3rd Floor, Indian Habitat Centre
                                    Lodhi Road, New Delhi, India
                                    011-24641853, 41504740<br/>
            
                                    <b>Contact Person:-</b><br/>
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






















<div className='mb0 main_header'>
            <div className="language_nav  b--white">
                <Languagenav context={props.context}/>
            </div>
            <hr/>
            <div className="header_div11  pa2  b--white">
                <Link to="/" exact >
                    <img className="logo link pointer" src={Logo}/>
                </Link>
                <div className="header_div12  pa2  b--white">
                    <p className="white header" id="header">AIBTMF</p>
                    <p className="white header">All India Brick and Tile Manufacturing Federation</p>
                </div>
            </div>
            <div className="nav mt2 pb3 b--white">
                <div className="dropdown  b--white ">
                    <Link to='/'>
                        <button className="white pointer fw6 grow">Home</button>
                    </Link>
                </div>
                <div className="dropdownnew   b--white ">
                    <button className="white  fw6  grow">Management</button>
                    <div className="dropdown_contentnew  b--white ">
                        <Link to='/listofmembers'>
                            <p className="pointer dim link mt1 optionnew">Management Committee</p>
                        </Link>
                        <Link>
                            <p className="pointer dim link optionnew">List of Executives</p>
                        </Link>
                    </div>
                </div>
                <div className="dropdownnew  b--white ">
                    <button className="white  fw6  grow">Members</button>
                    <div className="dropdown_contentnew  b--white ">
                        <Link>
                            <p className="pointer dim mt1 link optionnew">Application Form</p>
                        </Link>
                        <Link>
                            <p className="pointer dim link optionnew">List of Life Members</p>
                        </Link>
                    </div>
                </div>
                <div className="dropdownnew  b--white ">
                    <button className="white  fw6  grow">Innovations</button>
                    <div className="dropdown_contentnew  b--white ">
                        <Link to='/machines'>
                            <p className="pointer dim link mt1 optionnew">Machines</p>
                        </Link>
                    </div>
                </div>
                <div className="dropdownnew  b--white ">
                    <button className="white  fw6  grow">News</button>
                    <div className="dropdown_contentnew  b--white ">
                        <p className="pointer dim link  mt1 optionnew">Articles</p>
                        <p className="pointer dim link optionnew">News</p>
                    </div>
                </div>
                <div className="dropdownnew  b--white ">
                    <Link to='/listofmeetings'>
                        <button className="white pointer fw6  grow ">Meetings</button>
                    </Link>
                </div>
                <div className="dropdownnew  b--white ">
                    <Link to='/gallery'>
                        <button className="white pointer fw6  grow ">Gallery</button>
                    </Link>
                </div>
                <div className="dropdownnew  b--white ">
                    <Link to='/contactus'>
                        <button className="white pointer fw6 grow">Contact Us</button>
                    </Link>
                </div>             
                                
            </div>
        </div>











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










<div className="contactus">
                <p className='f2 fw7 center'>CONTACT US</p>
                 {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                <iframe className='map_frame'  src="https://www.google.com/maps/embed/v1/place?q=28.590302,77.225778&amp;key=AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU">

                </iframe>
                <div className="contact_div mt3">
                    <form className='message_form  b--black'>
                        <div className='message_form2'>
                            <div className='w-40'>
                                <p className='fw6 ml1'>Name</p>
                                <input className='input w-80' type='text' name='name'/>
                            </div>
                            <div className='w-45'>
                                <p className='fw6 ml1'>Email</p>
                                <input className='input w-100' type='email' name='email'/>
                            </div>
                        </div>
                        <br/>
                        <textarea className='input w-80 h-100' id='input' type='text' name='messagw' placeholder='Message'></textarea>
                        <button type='submit' className='bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                    </form>
                    <div className="contact_details  b--black">
                        <p className='f3 fw6 red'>All India Brick & Tile Manufacturers Federation (AIBTMF)</p>
                        <p className='fw6'>
                            All India Brick & Tile Manufacturers Federation (AIBTMF)
                            Zone 6A, 3rd Floor, Indian Habitat Centre
                            Lodhi Road, New Delhi, India
                            011-24641853, 41504740
                            Contact Person:-
                            Sh. R. K. Verma 
                            Email: aibtmf@rediffmail.com
                        </p>
                        <p className='f3 fw6 red'>
                            Account Number : 1234567890
                        </p>
                        <p className='f3 fw6 red'>
                            IFSC Code : IFB123456
                        </p>
                    </div>
                </div>
            </div>










                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header f2 fw7'>
                                                    Brick Making : One of the Oldest Profession
                                                </p>
                                                <p className='home_slide_text fw7 f4'>
                                                    Man has used brick for building purpose for thousands of years. Bricks date back to 7000 BC, which makes them one of the oldest known building materials. They were discovered in southern Turkey at the site of an ancient settlement around the city of Jericho.<br/><br/> 

                                                    The first bricks, made in areas with warm climates, were mud bricks dried in the sun for hardening. 
                                                    Ancient Egyptian bricks were made of clay mixed with straw. The evidence of this can be seen today at ruins of Harappa Buhen and Mohenjo-daro. Paintings on the tomb walls of Thebes portray Egyptian slaves mixing, tempering and carrying clay for the sun dried bricks. 
                                                </p>
                                            </div>  
                                        </div>


























import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';
import axios from 'axios';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


import {meetings} from '../../Helpers/meetings';



class Listofmeetings extends Component {

   
        state = {
            num:'0',
            meetingPosts:[],
        }

    

    componentDidMount(){
        axios.get('http://localhost:3001/fetchmeetings')
            .then((response) =>{
                this.setState({meetingPosts: response.data});
                console.log(response.data);
            });
    }

   
    render(){
        let meetingPostsstore = this.state.meetingPosts;


        let meeting_handler = (num) =>{
            return(
                this.setState({num : num })
        
            );
        }
        const meeting_array = meetingPostsstore.map((user,num) =>{
            return(
                <div className="bl bb b--gray br4 mb2 shadow-2 pa2">
                    <p data-key={num} key={num} onClick={() =>meeting_handler(num)} className="red link pointer dim "><i>{meetingPostsstore[num].date}</i></p>
                    <p  className="meet">{meetingPostsstore[num].description}</p>
                </div> 
            );           
        });

        const data = (
                this.state.meetingPosts 
                ?
                    <div className="meeting_details bt bb bw2 b--black br4 mb2 mt4 pa2">
                        <h3 className="f3 fw8">{meetings[Number(this.state.num)].title}</h3>
                        <p className='f4 fw5 red'><i>{meetings[Number(this.state.num)].description}</i></p>
                        <p className="f5 fw7 mt4 tj "><i>{meetings[Number(this.state.num)].details}</i></p>
                    </div>
                :
                <div></div>
                
        );


      
        return(
            
            <div className='meetings ba b--black pa2'>
                <h1 className="center">
                    MEETINGS
                </h1>
                <div className="meeting_box_combine  b--black" >
                    <div className="meeting_list_box bt bb bw1 b--black br4 shadow-5">
                        <h3 className="meeting_list_header f3 fw8 ba b--gray bw1 shadow-2 br4 pa2 tc bg-white ">Meetings in the past.</h3>
                        {meeting_array}
                    </div>
                    {data}  
                </div>
            </div>
    
        )

    }
   
}

export default Listofmeetings;