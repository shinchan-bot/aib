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
        axios.get('https://brick-india.herokuapp.com/fetchmeetings')
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









                                                



            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto navigation">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Management" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="menuitem">Management Committee</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="menuitem" >List of Executives</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Members" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="menuitem">Application Form</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="menuitem" >List of Life Members</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Innovations" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="menuitem">Machines </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="menuitem" >Vendors</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="News" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="menuitem">Articles </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="menuitem" >News</NavDropdown.Item>
                            </NavDropdown> 
                            <Nav.Link href="/listofmeetings">Meetings</Nav.Link>
                            <Nav.Link href="/">Gallery</Nav.Link>
                            <Nav.Link href="/">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>













<div className='machines bg-white  b--black'>
                <p className='f2 machine_header fw6'>INNOVATIONS AND MACHINES</p>
                <div className='machine_div  b--black'>
                    <p className='machine_name f4-ns '>Vertical Shaft Kiln</p>
                    <div className="machine  b--black">
                        <img src={Machine1} className='h-50-ns machine1  mt4' />
                        <div className='machine_details  b--black'>
                            <p className='machine_name '>Vertical Shaft Kiln</p>
                            <p className='fw6 machine_description'>Operation is round-the-clock and annual production of up to 60 lakh bricks has been achieved from commercial VSBK’s operating in India and across. The kiln can be operated throughout the year and even during monsoon time.</p>
                            <p className='f6 fw6 machine_detail'>
                                <i>
                                    A VSBK gives you unmatched flexibility of operation, good product quality and substantial saving in energy costs. You can plan a precise production schedule and produce exact quantity of bricks that you require. Once operational, loading and unloading is carried out simultaneously. In general, one batch of bricks is loaded (and one unloaded) every one and a half to two hours. The bricks remain inside the kiln for approximately 24 to 30 hours instead of the 20 to 30 days required with a BTK. This reduces the working capital substantially.The choice of fuel is based on cost considerations and the quality of product desired.Based on the location, coal and even lignite pellets are being used effectively. However proper firing control and optimum quality is achieved with a low volatile coal having a calorific value between 4000 – 5000 KCal/kg to raise the kiln temperature around 1100 degree centigrade. High calorific value coal is not recommended for VSBK operation. Recommended coal size is between 5 to 50 mm. In recent times where suitable coal is not available, VSBK has been operated with wastebiomass based green solid briquettes. It has the equivalent consumption to coal and produces identical quality.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='machine_div  b--black'>
                    <p className='machine_name f4-ns '>Hoffman Kiln</p>
                    <div className="machine  b--black">
                        <img src={Machine2} className='h-50-ns machine2 mt4' />
                        <div className='machine_details  b--black'>
                            <p className='machine_name '>Hoffman Kiln</p>
                            <p className='fw6 machine_description'>Along the brick kiln, every 4 to 5 meters, an inlet and outlet span is erected. The distance between each two spans is called a Ghamir. The roof of the brick kiln has some holes at regular distances of 60 to 70cm from each other. These holes are called carburetor-jets. Some valves for air vacuum are also available in the lower part of the brick kiln.</p>
                            <p className='f6 fw6 machine_detail'>
                                <i>
                                    To perform the baking process, the Ghamirs are loaded in an intersectional manner with bricks. The end of the Ghamirs are closed with a wall of bricks, and the span of the brick kiln is mudded. The carburetor-jets push the fuel mixture gas and air forcefully into the kiln through the holes of carburetor-jets. Through the vacuum produced by air valves, the fire is directed to all parts of the Ghamirs and the baking process is carried out.The temperature required for baking the mud-bricks is about 1000° centigrade, which should gradually be produced through pre-heating. When the stage of baking in every Ghamir is over, its air valves are closed, and the valves of the next Ghamir are opened in order to direct the fire towards itself. The carburetor-jets are also alternately moved on the roof of the kiln to apply the temperature evenly to all parts of the kiln.The baking work in every Ghamir lasts between 2.5 and 3 hours. After this time, some holes are made in the mudded area until the space of the Ghamir is gradually cooled. Then, the spans are opened and the baked blocks are transferred from inside the kiln to the trucks by conveyor strips
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


import React from 'react';
import 'tachyons';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Listoflofemembers() {
    return (
        <div className='bg-white LIFEMEMBERS background_cover pa2'>
            <h1 className="tc list_of_members_header ">
                    Life members
                </h1>
        <Accordion>
        <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       LIFE MEMBERS REGISTERED WITH FEDERATION
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1UhD3Vn9BGjxYT0fMDRWkT9NO4MUh0D0w" target="_blank">
                            <p className="black">ELECTED EMBERS OF TAMIL NADU</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1LR-SzGsS2RzI_GBjReS-gQeboDJT2rw-" target="_blank">
                            <p className="black">LIST OF LIFE MEMBERS FROM BENGAL</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1O3_xV-thsEgV2BbO3GtZ1ybTNgbPzkpC" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM ASSAM</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1KiWPoLE39lG9bczjbRIR4NNkBzNRQiqB" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM ANDRA PRADESH</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1BJk-y2-mSQx2qDv_Y59nW6uJGYdRpwKx" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM JHARKHAND</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1T7cJ3V6qdzxzCmfNzA2C-7yylInkQf4_" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM BIHAR</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1buIRt0G52nKuJ86TW81yt5s2y6uCpKM4" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM CHANDIGARH</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1tp3F5iiQdQljUqhAG187UIF_cbLhxCsl" target="_blank">
                            <p className="black">LIST OF MEMBERS FORM  GUJARAT</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1aH4dWeKVQ6nv9ax79WB7uPuqLHJ5ljEW" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM HIMACHAL PRADESH</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1xWmabtuzOg7VPQA6Og6ix47hBQB2u8j2" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM KARNATAKA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1dHxpzQf5wJ4ABYceS7nTg60NN1VcX_aT" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM KERALA</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1dDXQFxzwyIyA77q3ey2LZRwcBAOyqfJm" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM MADHYA PRADESH</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1zAC2HsrRTuIrVChxVRqkdUl4YPF1GO_W" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM MAHARASHTRA</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1qxwieSuHg-Cwjj1OxPlYIvzhrHRXfuQA" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM MANIPUR</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1DV3OYMLpiV8dhiRqPlDL-7QsxCaFOQ65" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM ORRISA</p>
                        </a>
                    </div> */}
                    {/* <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1bPfEq25GV9nyt5VdJstWyB62vENgW_kc" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM TRIPURA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1HsB2HGyD2trNC3sO85fTBX1OVIW1qYkI" target="_blank">
                            <p className="black">LIST OF MEMBERS FROM TAMIL NADU</p>
                        </a>
                    </div> */}
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       HARYANA
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1-iE3PxHfOKH5on08DUZNjgiRi3LAuIUz" target="_blank">
                            <p className="black">TOTAL NUMBER OF MEMBERS</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1MzeNAwJNckaubi5serA6BuLF856-XVSU" target="_blank">
                            <p className="black">AMBALA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1JzVJ0m5YkpyMbIWaMGbHLK0g2yMlAL0O" target="_blank">
                            <p className="black">BHIWANI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1uwU7Uh-A6JgDkDAtAkKmxl3ht6yDfuw4" target="_blank">
                            <p className="black">FARIDABAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1EJxZZKroK3YNCtp7R4wx6TPQDcPf--mb" target="_blank">
                            <p className="black">GURGAON</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1ltpZrSxOanwo3-nWyCqGjv3DnF-svUD4" target="_blank">
                            <p className="black">HISSAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=16u5uk_HPSOrYQss3HeWZCzjdL4sHDXgd" target="_blank">
                            <p className="black">JIND SAFIDON</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1giULtVhWW6RBZdu6mfQHkzFI2ZmoUoNb" target="_blank">
                            <p className="black">KURUKSHETRA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1wyhfNu3wfJAcJJnNqwo3KsBArQVuz7rH" target="_blank">
                            <p className="black">MAHINDERGARH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1ahnx2K53TNG1yGHbkLH7RXd0SQHR0-MD" target="_blank">
                            <p className="black">PANIPAT</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1Myps5xBTi3vb8hQRFPyab9e7OgRKHgMz" target="_blank">
                            <p className="black">PALWAL</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1WpWB3UKCpPN-Sn-kyX7IPOWu9urrgHQq" target="_blank">
                            <p className="black">PUNCHKULA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1qZtpCh_Rpjie8XEncuRM27B6JoS_j-HX" target="_blank">
                            <p className="black">REWARI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1EJ-u1WQpeTVAl6n1Z_T-lUqpmOc217HD" target="_blank">
                            <p className="black">ROHTAK</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1lLf1kkNEd8wWEziaYIP_I3xwixa5C--3" target="_blank">
                            <p className="black">SONIPAT</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=12vcaWsRlnfUd-zGXXkgWNLNKC8kkJd2r" target="_blank">
                            <p className="black">SIRSA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1NgyunyRnUJxGyiYfwX8EFs-McyaCVQVj" target="_blank">
                            <p className="black">YAMUNA NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1xce6WcuEqFkBD5-gzDkYo0_LS-w5rVyF" target="_blank">
                            <p className="black">MEWAT</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       UTTAR PRADESH
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=12MyuZUVHgffHKawFsaxOxeF4meFBdbQ8" target="_blank">
                            <p className="black">TOTAL NUMBER OF MEMBERS</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1A1Fp2xXlnObqJaQBnme6tgoDl8s6MHeZ" target="_blank">
                            <p className="black">AGRA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1u8nrIBqwwX8QDkZGvvdagj56qHkOaVrv" target="_blank">
                            <p className="black">ALIGARH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1O6DmNfmIypdnx_E25V4TcqvawgeywbSU" target="_blank">
                            <p className="black">ALLAHBAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1j43zgv37Pt8jw6WWxdMQYRNEg0YkPOq5" target="_blank">
                            <p className="black">AZAMGARH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1i4FwxNwECmvobVmc3em11m-9fKHT4ymO" target="_blank">
                            <p className="black">AMBEDKAR NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1dPcfaXwbaAeE73QbR9F7wlUvba9Akblq" target="_blank">
                            <p className="black">AMROHA J.P NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1Ke7oTiG2LYKt1HGxxGUR8YRQGHAPwkA0" target="_blank">
                            <p className="black">BAGHPAT</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1eEicOOfPM__Z4H0zqdq7qqhmAwyYUd_x" target="_blank">
                            <p className="black">BARABANKI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1K0unKCamKEQesIX1fhqnKfbG03gjH4_a" target="_blank">
                            <p className="black">BAHRAICH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1pEThORic6BotxRZzJBySGVz5yX38cF1p" target="_blank">
                            <p className="black">BIJNOR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1sd3GauQT68JQdhsUTyeeOnfxSkQ-ybmN" target="_blank">
                            <p className="black">BULANDSHAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1qOsQJ4hexXFMDppNVQGIBVQz50Q-aVAO" target="_blank">
                            <p className="black">BASTI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1IRw6eQXnPJ-j4DsdsXqrOox-UqyFDEhk" target="_blank">
                            <p className="black">BAREILY</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=16cwU69HNfpU4v4QOQZt2irFE7wxogTOk" target="_blank">
                            <p className="black">BALIA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1yyGlOBxobIQv02Ci9xfHKaC5hSKl0r4H" target="_blank">
                            <p className="black">BADAUN</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1yyGlOBxobIQv02Ci9xfHKaC5hSKl0r4H" target="_blank">
                            <p className="black">BALRAMPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1yyGlOBxobIQv02Ci9xfHKaC5hSKl0r4H" target="_blank">
                            <p className="black">BHADOHI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1yyGlOBxobIQv02Ci9xfHKaC5hSKl0r4H" target="_blank">
                            <p className="black">BANDA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1YbXbAUMl0QFBJI_lAWkmOav7GRXMQx13" target="_blank">
                            <p className="black">CHANDAULI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1T4w27EYPk9G6VJjfu-EfUlt5yj5V9vmw" target="_blank">
                            <p className="black">DEORIA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=16ojEs61w7TNwlZ8WWAWazhqgfMPJPvdx" target="_blank">
                            <p className="black">ETAH KASGANJ</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=12g9MajLRDAsbUNH7QYK0b6nIuv2E47Bo" target="_blank">
                            <p className="black">ETAWAH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1u0G-GyjXPIdBVF92T1hkJTy6g4an00gA" target="_blank">
                            <p className="black">FAIZABAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1aNwKPwMykhglDc5ouj8bHCI4Pg8fVDLW" target="_blank">
                            <p className="black">FARUKHABAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1TUk335GAsj1yHJbVhwZk1oKmMvwVrXaP" target="_blank">
                            <p className="black">FATEHPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1fW12MyOrVLLxhHrjUG0cjc8wss6Zx7Aq" target="_blank">
                            <p className="black">FIROZABAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1GixLYmrvQHnIlI217o6miVeZ7BILbiO-" target="_blank">
                            <p className="black">GAZIABAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1_Cg14h4QsGhgJQjrcjxftEV1c7hxRn3M" target="_blank">
                            <p className="black">GONDA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1inruUyP9lWN8G6Tkf2Y_pH1hHXVqJ6Vv" target="_blank">
                            <p className="black">GARH HAPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1yV1nGTTzIpWTnPHLN1KuDRe3Ya91R0YO" target="_blank">
                            <p className="black">HAMIRPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1-izFkW6DKJB1EZQNl0NJexXk8viHKgaO" target="_blank">
                            <p className="black">HARDOI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1joKqMivIzNG4atcMVYCKixHQe5Nlb6Wm" target="_blank">
                            <p className="black">HATHRAS</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1F-vuAo5fTKFfAm9ZAn-B4HpgkeQCo5h8" target="_blank">
                            <p className="black">JHANSI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1UkxnVmBCzwN4Ci3YLgvx8LGS4MiQUsgc" target="_blank">
                            <p className="black">JALLON</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1TIzuUbeV-muKAolej6MmJ6LoOvKkyydm" target="_blank">
                            <p className="black">JAUNPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1tMTlN27G3DLKA1tiRYxgYjh7sAkydLN1" target="_blank">
                            <p className="black">KANPUR CITY</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1HZLp2S8L6RAd40YYLgqLD4EJ8ZVD5x8G" target="_blank">
                            <p className="black">KANPUR DEHAT</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1mEkdlrhAMcMSbUot3uKFs_Z3G2ud4dgM" target="_blank">
                            <p className="black">KANNAUJ</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=15VYpfel0PD6r72q7p_B_FzhUszJ2Txvo" target="_blank">
                            <p className="black">LUCKNOW</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1JjUZpFPrbNLfE5HnPTTD2LjTyI1ARg7U" target="_blank">
                            <p className="black">LAKHIMPUR KHERI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=10bNU05nDZ3RGHGdNjP_k7-R78evR_dST" target="_blank">
                            <p className="black">MEERUT</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1AfEBztoqSMFUyHDcO7lDyTOALbGXNxN2" target="_blank">
                            <p className="black">MODINAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1anH6dBWnOAxLeOSyvD_Xibjju3iJTlyP" target="_blank">
                            <p className="black">MUZZAFAR NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1umTkq1rzsKCVRicQprlTMr-EVBM_am_O" target="_blank">
                            <p className="black">MIRZAPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1zX_MQPVrUAQiIBZmeNyAAAni73Jt2aA0" target="_blank">
                            <p className="black">MANIPURI</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1i5l1nsFuZrlDL0qR3S9BGcQqH6CmOjv7" target="_blank">
                            <p className="black">MATHURA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1LB1_dCvAhtAAXC8WyiRiV_u3u-mA_h_F" target="_blank">
                            <p className="black">MAHARAJ GUNJ</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1wihrbmcauJwO9XNWbe-Sp50HOtR-f07H" target="_blank">
                            <p className="black">MORADABAD</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1SQXIh6ksGGk3CPayjbCqF41j60plUGmE" target="_blank">
                            <p className="black">MOU</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1xFpoMUzA9H30vBfWWdLyKkjwtWFUmAIi" target="_blank">
                            <p className="black">NOIDA G..B. NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1VOWoGIFhcfgxHEnqdaM_rxc-MF3XbS0F" target="_blank">
                            <p className="black">PILIBHIT</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1prWp7gKyVnYvhWqD0ODiuUgovLA5jpXP" target="_blank">
                            <p className="black">PADRAUNA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1kcHdTsdFW-T-eOHOSwELgq3wJ_CCjNdh" target="_blank">
                            <p className="black">PARTAPGARH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1qwCPJTzi6akL4kFW1tWGxAzZuHac8qsv" target="_blank">
                            <p className="black">RAI BAREILY</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1qN74Nk_aV6Ss4zAWiZfRhbrMi5Bi62j9" target="_blank">
                            <p className="black">RAMPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1QJqt6ufAB1D1z37vPPuDR1OI4ns80o2n" target="_blank">
                            <p className="black">SAHARANPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1nTuL9M6pj0xlDwQ0QrA0eQPiOJdNe7xk" target="_blank">
                            <p className="black">SHAHJAHAN PUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1q_RHJb6glzMNUQaodlljRAK_N6NIYN8c" target="_blank">
                            <p className="black">SITAPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1JZOrya_oB86m4QOmg8fOUsOyvVy8zJeI" target="_blank">
                            <p className="black">SULTANPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1Z55sZT2IflgJFfu6uk93lLigv8mRLQYq" target="_blank">
                            <p className="black">SIDHARTH NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1V7Dzxql2GIiusoJhV5A1qhCGy2sFK1X2" target="_blank">
                            <p className="black">SONBHADRA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1KEfEwuYcmD3S5nO00IrO1BceeiWteESA" target="_blank">
                            <p className="black">TUNDLA</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1frip4wt5lQGNovXEGKr6Tk6vafetfYr0" target="_blank">
                            <p className="black">UNNAO</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1Hvy69EG6xHxGLOWI-RmY0ClEUdfRw-6f" target="_blank">
                            <p className="black">VARANASI</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       RAJASTHAN
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1ZDBvfH028d8veUAxftHwGV-QgHRGOKd4" target="_blank">
                            <p className="black">TOTAL NUMBER OF MEMBERS</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1pd4c-VlOLvm3AhwcFqTRk2BNe0Ac9Y5X" target="_blank">
                            <p className="black">ALWAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=17uaOEezPOckZoScT8sRQ8OuLNnI8qeQm" target="_blank">
                            <p className="black">BIKANER</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1O8mIEyKacZPviRkXLwByTo7bEv09qQln" target="_blank">
                            <p className="black">HANUMAN GARH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1F6wGbMTBebbAe4ZGyGRF3pN2agYrvlbv" target="_blank">
                            <p className="black">JAIPUR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1FNEApirSyzIhmskUZATGxTjfX7nrwEu5" target="_blank">
                            <p className="black">SRI GANGA NAGAR</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1iap-PuJgfDLwtszPN6SWuGF-BcKXcbRV" target="_blank">
                            <p className="black">BHARATPUR</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       UTTRANCHAL
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1T5D6wQ60DjLL1wmaDoJiwCrrya4FdaDh" target="_blank">
                            <p className="black">TOTAL NUMBER OF MEMBERS</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1JlQghdRoZ1-lF5FudgWKiGlqA11nYNa0" target="_blank">
                            <p className="black">RISHI KESH</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=112RMzzz8KO8DyYVflLV8XvvnkMhndoN0" target="_blank">
                            <p className="black">DEHRADUN</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1TL12NN3asYFGuMy7aiz72EA16tXcNosI" target="_blank">
                            <p className="black">NANITAL</p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1JKviVYejtFo-P0Sa6wzjtmyRMvtyAUOP" target="_blank">
                            <p className="black">ROORKEE</p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       PUNJAB
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1INLb9hiKAUkbldkhkkZnv8sZq4U1LB01" target="_blank">
                            <p className="black">TOTAL NUMBER OF MEMBERS </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1JB7hbKFWfB7Akf6Rk3UOSgv_YuR1SN9b" target="_blank">
                            <p className="black">STATE BEARER LIST OF PUNJAB </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1RQDXsiIq_kE4RPyTpByH3wvf0IYIheLv" target="_blank">
                            <p className="black">LIST OF PREESIDENT/ GENERAL SECRETARY OF PUNJAB </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1UHUbVEwAJW6CLE521FNzAvMkQvINfDq0" target="_blank">
                            <p className="black">AMRITSAR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=12dZVnxzm8EgNcVJmNCiFOsehAW-aU5-m" target="_blank">
                            <p className="black">BHATINDA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=12XqjZNN1dyjU6y3L5UBXMXFs5vVqM9lp" target="_blank">
                            <p className="black">FARIDKOT </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1xVZ6oOU6jIcJJyz-5RaO0Em8UdKrrcC4" target="_blank">
                            <p className="black">FAZILKA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1qw9krgTr7MS-SZ5UWyWHP9Ox87cA2-1B" target="_blank">
                            <p className="black">FEROZEPUR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1R0OTb1aHuY_S7ZMIXqnyyZDt7jSZoSJS" target="_blank">
                            <p className="black">FATEHGARH SAHIB </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1OyaRX8vVSDciFn4EhZywd4llfVfBfE-S" target="_blank">
                            <p className="black">GURDASPUR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1XTvkLGSE2sqZwYPpCJfyl7P1Iu8MbXCr" target="_blank">
                            <p className="black">HOSHIARPUR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1LO0zTIuHsSN1sJXMxptPUX_Itir85BpH" target="_blank">
                            <p className="black">JALANDHAR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1YNx1tJonVMChm-sbGb2U4aY79oe6nmI2" target="_blank">
                            <p className="black">KAPURTHALALA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1C2EkKpbe1gLgK2YVylpVzhdnZ0g5bcAm" target="_blank">
                            <p className="black">LUDHIANA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=12fytngiOzoj5frvQOmv3O5xxeokCbLw4" target="_blank">
                            <p className="black">MOGA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1KNZLcG8u8yTxwK4gK4I-c5cjVEsMhN6U" target="_blank">
                            <p className="black">MUKTSAR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1HwMBaUzfBOD72R5uXzsRW7ouzptBiMHO" target="_blank">
                            <p className="black">MOHALI </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1afBAHC38CeMcDfp3BxWvjZ_BGnziy_Z3" target="_blank">
                            <p className="black">MANSA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1C9Kp5tUapGabnsEF-dlHu4wvO9N_k5BS" target="_blank">
                            <p className="black">NAWANSHAHR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1TJIOTc3B1FavJWuvdWfH9JRboqZbsmeg" target="_blank">
                            <p className="black">PATHANKOT </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=19nFWsuOICAd3k4oIeWReh-udXuZ2xFUK" target="_blank">
                            <p className="black">PATIALA </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1oM4B1WFKvjl78g7L9KjvUd2Zc9sGYwsP" target="_blank">
                            <p className="black">ROPAR MOHALI </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1WyHz4hd7rC4aCpqYgYusk6kr7TB9fD7-" target="_blank">
                            <p className="black">SANGRUR </p>
                        </a>
                    </div>
                    <div className='vendor_div bg-light-gray pa2 mb2 ba b--white br3 shadow-4'>
                        <a href="https://drive.google.com/open?id=1BHrXahMUcEmqey4eK1xdcW9KbxM4XvIu" target="_blank">
                            <p className="black">TARAN TARAN </p>
                        </a>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
}
