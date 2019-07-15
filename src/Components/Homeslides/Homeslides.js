import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import '../../util/css/app.css';
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Brick2 from '../../util/assets1/brick.png';
import Back from '../../util/assets1/transparent.png';
import Face from '../../util/assets1/president.jpg';
import Logo from '../../util/assets1/brick-logo.jpg';
import Location from '../../util/assets1/location.png';
import o from '../../util/assets1/1.jpg';
import Demoimage from '../../util/assets1/gallery_demo_image.jpg';
import Demo from '../Demo/Demo';
import Twitter from '../../util/assets1/twitter.svg';
import Facebook from '../../util/assets1/facebook.svg';
var ReactDOM = require('react-dom');





class Homeslides extends Component{

    state = {
        length:'',
        breadth:''
    }


        

    onLengthChange = (event) => {
        this.setState({length: event.target.value})
    }

    onHeightChange = (event) => {
        this.setState({breadth: event.target.value})
    }


    render(){
        
        let wall = Number(this.state.length)*Number(this.state.breadth);
        let no_of_bricks = Number(wall)/0.262596359;
           
        
        return(
           <MyContext.Consumer>
               {(context)=>(
                   <React.Fragment>
                       {(()=>{
                           if(context.state.language === 'hindi'){
                               return(
                                <div className="home_content">
                                    <Carousel>
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header w-40  fw7'>
                                                   {translationHIN.home_slides.title1}
                                                </p>
                                                <p className='home_slide_text w-50 fw7 '>
                                                {translationHIN.home_slides.detail1}
                                                </p>
                                            </div>  
                                            <img className='home_slide_image' src={Brick2} />                    
                                        </div>
                                        <div className='home_slide_div' id='bg2'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header  fw7'>
                                                    {translationHIN.home_slides.title2}
                                                </p>
                                                <p className='home_slide_text fw7 '>
                                                    {translationHIN.home_slides.detail2}
                                                </p>
                                            </div>  
                                        </div>
                                        <div className='home_slide_div' id='bg3'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header  fw7'>
                                                    {translationHIN.home_slides.title3}
                                                </p>
                                                <p className='home_slide_text fw7 '>
                                                    {translationHIN.home_slides.detail3}
                                                </p>
                                                <form className='message_form ml4 b--black'>
                                                <div className='message_form2 ml4'>
                                                    <div className='w-40 mh2'>
                                                        <p className='fw6 ml1 red white'>{translationHIN.home_slides.height}</p>
                                                        <input onChange={this.onHeightChange} className='input red w-100 ' type='text' name='height' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40'>
                                                        <p className='fw6 ml1 red white'>{translationHIN.home_slides.length}</p>
                                                        <input onChange ={this.onLengthChange} className='input red w-100' type='text' name='length' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40 ml2'>
                                                        <p className='fw6 ml1 green white'>{translationHIN.home_slides.bricks}</p>
                                                        <input className='input green w-200' type='text'  placeholder={translationHIN.home_slides.brick} value={Math.floor(Number(no_of_bricks)) +'  Bricks'} />
                                                    </div>
                                                    
                                                </div>
                                                </form>
                                            </div>  
                                        </div>
                                    </Carousel>     
                                </div>

                               );
                           }else if(context.state.language === 'punjabi'){
                            return(
                             <div className="home_content">
                                 <Carousel>
                                     <div className='home_slide_div' id='bg1'>
                                         <div className='home_slide_text_div'>
                                             <p className='home_slide_header w-40  fw7'>
                                                {translationPUN.home_slides.title1}
                                             </p>
                                             <p className='home_slide_text w-50 fw7 '>
                                             {translationPUN.home_slides.detail1}
                                             </p>
                                         </div>  
                                         <img className='home_slide_image' src={Brick2} />                    
                                     </div>
                                     <div className='home_slide_div' id='bg2'>
                                         <div className='home_slide_text_div'>
                                             <p className='home_slide_header  fw7'>
                                                 {translationPUN.home_slides.title2}
                                             </p>
                                             <p className='home_slide_text fw7 '>
                                                 {translationPUN.home_slides.detail2}
                                             </p>
                                         </div>  
                                     </div>
                                     <div className='home_slide_div' id='bg3'>
                                         <div className='home_slide_text_div'>
                                             <p className='home_slide_header  fw7'>
                                                 {translationPUN.home_slides.title3}
                                             </p>
                                             <p className='home_slide_text fw7 '>
                                                 {translationPUN.home_slides.detail3}
                                             </p>
                                             <form className='message_form ml4 b--black'>
                                             <div className='message_form2 ml4'>
                                                 <div className='w-40 mh2'>
                                                     <p className='fw6 ml1 red white'>{translationPUN.home_slides.height}</p>
                                                     <input onChange={this.onHeightChange} className='input red w-100 ' type='text' name='height' placeholder='feet' />
                                                 </div>
                                                 <div className='w-40'>
                                                     <p className='fw6 ml1 red white'>{translationPUN.home_slides.length}</p>
                                                     <input onChange ={this.onLengthChange} className='input red w-100' type='text' name='length' placeholder='feet' />
                                                 </div>
                                                 <div className='w-40 ml2'>
                                                     <p className='fw6 ml1 green white'>{translationPUN.home_slides.bricks}</p>
                                                     <input className='input green w-200' type='text'  placeholder={translationPUN.home_slides.brick} value={Math.floor(Number(no_of_bricks)) +'  Bricks'} />
                                                 </div>
                                                 
                                             </div>
                                             </form>
                                         </div>  
                                     </div>
                                 </Carousel>     
                             </div>

                            );
                        }else if(context.state.language === 'marathi'){
                            return(
                             <div className="home_content">
                                 <Carousel>
                                     <div className='home_slide_div' id='bg1'>
                                         <div className='home_slide_text_div'>
                                             <p className='home_slide_header w-40  fw7'>
                                                {translationMAR.home_slides.title1}
                                             </p>
                                             <p className='home_slide_text w-50 fw7 '>
                                             {translationMAR.home_slides.detail1}
                                             </p>
                                         </div>  
                                         <img className='home_slide_image' src={Brick2} />                    
                                     </div>
                                     <div className='home_slide_div' id='bg2'>
                                         <div className='home_slide_text_div'>
                                             <p className='home_slide_header  fw7'>
                                                 {translationMAR.home_slides.title2}
                                             </p>
                                             <p className='home_slide_text fw7 '>
                                                 {translationMAR.home_slides.detail2}
                                             </p>
                                         </div>  
                                     </div>
                                     <div className='home_slide_div' id='bg3'>
                                         <div className='home_slide_text_div'>
                                             <p className='home_slide_header  fw7'>
                                                 {translationMAR.home_slides.title3}
                                             </p>
                                             <p className='home_slide_text fw7 '>
                                                 {translationMAR.home_slides.detail3}
                                             </p>
                                             <form className='message_form ml4 b--black'>
                                             <div className='message_form2 ml4'>
                                                 <div className='w-40 mh2'>
                                                     <p className='fw6 ml1 red white'>{translationMAR.home_slides.height}</p>
                                                     <input onChange={this.onHeightChange} className='input red w-100 ' type='text' name='height' placeholder='feet' />
                                                 </div>
                                                 <div className='w-40'>
                                                     <p className='fw6 ml1 red white'>{translationMAR.home_slides.length}</p>
                                                     <input onChange ={this.onLengthChange} className='input red w-100' type='text' name='length' placeholder='feet' />
                                                 </div>
                                                 <div className='w-40 ml2'>
                                                     <p className='fw6 ml1 green white'>{translationMAR.home_slides.bricks}</p>
                                                     <input className='input green w-200' type='text'  placeholder={translationMAR.home_slides.brick} value={Math.floor(Number(no_of_bricks)) +'  Bricks'} />
                                                 </div>
                                                 
                                             </div>
                                             </form>
                                         </div>  
                                     </div>
                                 </Carousel>     
                             </div>

                            );
                        }else if(context.state.language === 'gujarati'){
                                return(
                                <div className="home_content">
                                    <Carousel>
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header w-40  fw7'>
                                                    {translationGUJ.home_slides.title1}
                                                </p>
                                                <p className='home_slide_text w-50 fw7 '>
                                                {translationGUJ.home_slides.detail1}
                                                </p>
                                            </div>  
                                            <img className='home_slide_image' src={Brick2} />                    
                                        </div>
                                        <div className='home_slide_div' id='bg2'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header  fw7'>
                                                    {translationGUJ.home_slides.title2}
                                                </p>
                                                <p className='home_slide_text fw7 '>
                                                    {translationGUJ.home_slides.detail2}
                                                </p>
                                            </div>  
                                        </div>
                                        <div className='home_slide_div' id='bg3'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header  fw7'>
                                                    {translationGUJ.home_slides.title3}
                                                </p>
                                                <p className='home_slide_text fw7 '>
                                                    {translationGUJ.home_slides.detail3}
                                                </p>
                                                <form className='message_form ml4 b--black'>
                                                <div className='message_form2 ml4'>
                                                    <div className='w-40 mh2'>
                                                        <p className='fw6 ml1 red white'>{translationGUJ.home_slides.height}</p>
                                                        <input onChange={this.onHeightChange} className='input red w-100 ' type='text' name='height' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40'>
                                                        <p className='fw6 ml1 red white'>{translationGUJ.home_slides.length}</p>
                                                        <input onChange ={this.onLengthChange} className='input red w-100' type='text' name='length' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40 ml2'>
                                                        <p className='fw6 ml1 green white'>{translationGUJ.home_slides.bricks}</p>
                                                        <input className='input green w-200' type='text'  placeholder={translationGUJ.home_slides.brick} value={Math.floor(Number(no_of_bricks)) +'  Bricks'} />
                                                    </div>
                                                    
                                                </div>
                                                </form>
                                            </div>  
                                        </div>
                                    </Carousel>     
                                </div>

                            );
                        }else{
                            return(
                                <div className="home_content">
                                    <Carousel>
                                        <div className='home_slide_div' id='bg3'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header underline w-40  fw7'>
                                                    {translationEN.home_slides.title1}
                                                </p>
                                                <p className='home_slide_text w-50 fw7 '>
                                                    {translationEN.home_slides.detail1}
                                                </p>
                                            </div>  
                                            <img className='home_slide_image w-30' src={Brick2} />                    
                                        </div> 
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header underline  fw7'>
                                                    {translationEN.home_slides.title2}
                                                </p>
                                                <p className='home_slide_text fw7 '>
                                                    {translationEN.home_slides.detail2}
                                                </p>
                                            </div>  
                                        </div> 
                                        <div className='home_slide_div' id='bg1'>
                                            <div className='home_slide_text_div'>
                                                <p className='home_slide_header underline  fw7'>
                                                    {translationEN.home_slides.title3}
                                                </p>
                                                <p className='home_slide_text  fw7 '>
                                                    {translationEN.home_slides.detail3}
                                                </p>
                                                <form className='message_form ml4 b--black'>
                                                <div className='message_form2 ml4'>
                                                    <div className='w-40 mh2'>
                                                        <p className='fw6 ml1 red white'>{translationEN.home_slides.height}</p>
                                                        <input onChange={this.onHeightChange} className='input red w-100 ' type='text' name='height' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40'>
                                                        <p className='fw6 ml1 red white'>{translationEN.home_slides.length}</p>
                                                        <input onChange ={this.onLengthChange} className='input red w-100' type='text' name='length' placeholder='feet' />
                                                    </div>
                                                    <div className='w-40 ml2'>
                                                        <p className='fw6 ml1 green white'>{translationEN.home_slides.bricks}</p>
                                                        <input className='input green w-200' type='text'  placeholder={translationEN.home_slides.brick} value={Math.floor(Number(no_of_bricks)) +'  Bricks'} />
                                                    </div>
                                                    
                                                </div>
                                                </form>
                                            </div>  
                                        </div>                                        
                                    </Carousel>     
                                </div>

                            );
                        }
                       })()}
                   </React.Fragment>
               )}
           </MyContext.Consumer> 
        )

    }  
}

export default Homeslides;