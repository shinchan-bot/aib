import React,{Component} from 'react'
import 'tachyons';
import { MyContext } from '../../context';


import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

class Contactus extends Component {
    render(){
        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){
                                return(
                                    <div className="contactus">
                                        <p className='f2 fw7 center'>{translationHIN.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe className='map_frame'  src="https://www.google.com/maps/embed/v1/place?q=28.590302,77.225778&amp;key=AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU">

                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form className='message_form  b--black'>
                                                <div className='message_form2'>
                                                    <div className='w-40 '>
                                                        <p className='fw6 ml1'>{translationHIN.contact_us.name}</p>
                                                        <input className='input w-80' type='text' name='name'/>
                                                    </div>
                                                    <div className='w-45'>
                                                        <p className='fw6 ml1'>{translationHIN.contact_us.email}</p>
                                                        <input className='input w-100' type='email' name='email'/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <textarea className='input w-80 h-100' id='input' type='text' name='messagw' placeholder={translationHIN.contact_us.message}></textarea>
                                                <button type='submit' className='bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className='f3 fw6 red'>{translationHIN.header.header} ({translationHIN.header.title})</p>
                                                <p className='fw6'>
                                                    {translationHIN.home_content.address_line1}<br/>
                                                    {translationHIN.home_content.address_line2}<br/>
                                                    {translationHIN.home_content.address_line3}<br/>
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationHIN.contact_us.account_number} : 1234567890
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationHIN.contact_us.ifsc} : IFB123456
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else if(context.state.language === 'gujarati'){
                                return(
                                    <div className="contactus">
                                        <p className='f2 fw7 center'>{translationGUJ.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe className='map_frame'  src="https://www.google.com/maps/embed/v1/place?q=28.590302,77.225778&amp;key=AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU">

                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form className='message_form  b--black'>
                                                <div className='message_form2'>
                                                    <div className='w-40 '>
                                                        <p className='fw6 ml1'>{translationGUJ.contact_us.name}</p>
                                                        <input className='input w-80' type='text' name='name'/>
                                                    </div>
                                                    <div className='w-45'>
                                                        <p className='fw6 ml1'>{translationGUJ.contact_us.email}</p>
                                                        <input className='input w-100' type='email' name='email'/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <textarea className='input w-80 h-100' id='input' type='text' name='messagw' placeholder={translationGUJ.contact_us.message}></textarea>
                                                <button type='submit' className='bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className='f3 fw6 red'>{translationGUJ.header.header} ({translationGUJ.header.title})</p>
                                                <p className='fw6'>
                                                    {translationGUJ.home_content.address_line1}<br/>
                                                    {translationGUJ.home_content.address_line2}<br/>
                                                    {translationGUJ.home_content.address_line3}<br/>
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationGUJ.contact_us.account_number} : 1234567890
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationGUJ.contact_us.ifsc} : IFB123456
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else if(context.state.language === 'marathi'){
                                return(
                                    <div className="contactus">
                                        <p className='f2 fw7 center'>{translationMAR.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe className='map_frame'  src="https://www.google.com/maps/embed/v1/place?q=28.590302,77.225778&amp;key=AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU">

                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form className='message_form  b--black'>
                                                <div className='message_form2'>
                                                    <div className='w-40 '>
                                                        <p className='fw6 ml1'>{translationMAR.contact_us.name}</p>
                                                        <input className='input w-80' type='text' name='name'/>
                                                    </div>
                                                    <div className='w-45'>
                                                        <p className='fw6 ml1'>{translationMAR.contact_us.email}</p>
                                                        <input className='input w-100' type='email' name='email'/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <textarea className='input w-80 h-100' id='input' type='text' name='messagw' placeholder={translationMAR.contact_us.message}></textarea>
                                                <button type='submit' className='bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className='f3 fw6 red'>{translationMAR.header.header} ({translationMAR.header.title})</p>
                                                <p className='fw6'>
                                                    {translationMAR.home_content.address_line1}<br/> 
                                                    {translationMAR.home_content.address_line2}<br/>
                                                    {translationMAR.home_content.address_line3}<br/>
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationMAR.contact_us.account_number} : 1234567890
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationMAR.contact_us.ifsc} : IFB123456
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else if(context.state.language === 'punjabi'){
                                return(
                                    <div className="contactus">
                                        <p className='f2 fw7 center'>{translationPUN.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe className='map_frame'  src="https://www.google.com/maps/embed/v1/place?q=28.590302,77.225778&amp;key=AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU">

                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form className='message_form  b--black'>
                                                <div className='message_form2'>
                                                    <div className='w-40 '>
                                                        <p className='fw6 ml1'>{translationPUN.contact_us.name}</p>
                                                        <input className='input w-80' type='text' name='name'/>
                                                    </div>
                                                    <div className='w-45'>
                                                        <p className='fw6 ml1'>{translationPUN.contact_us.email}</p>
                                                        <input className='input w-100' type='email' name='email'/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <textarea className='input w-80 h-100' id='input' type='text' name='messagw' placeholder={translationPUN.contact_us.message}></textarea>
                                                <button type='submit' className='bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className='f3 fw6 red'>{translationPUN.header.header} ({translationPUN.header.title})</p>
                                                <p className='fw6'>
                                                    {translationPUN.home_content.address_line1}<br/>
                                                    {translationPUN.home_content.address_line2}<br/>
                                                    {translationPUN.home_content.address_line3}<br/>
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationPUN.contact_us.account_number} : 1234567890
                                                </p>
                                                <p className='f3 fw6 red'>
                                                    {translationPUN.contact_us.ifsc} : IFB123456
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else{
                                return(
                                    <div className="contactus">
                                        <p className='f2 fw7 center'>{translationEN.header.nav.option8}</p>
                                        {/* ALL INDIA BRICK AND TILE MANUFACTURERS FEDERATION (28.590302, 77.225778) */}
                                        <iframe className='map_frame'  src="https://www.google.com/maps/embed/v1/place?q=28.590302,77.225778&amp;key=AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU">

                                        </iframe>
                                        <div className="contact_div mt3">
                                            <form className='message_form  b--black'>
                                                <div className='message_form2'>
                                                    <div className=''>
                                                        <p className='fw6 ml1'>{translationEN.contact_us.name}</p>
                                                        <input className='input w-80' type='text' name='name'/>
                                                    </div>
                                                    <div className=''>
                                                        <p className='fw6 ml1'>{translationEN.contact_us.email}</p>
                                                        <input className='input w-100' type='email' name='email'/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <textarea className='input w-80-ns text_area ' id='input' type='text' name='message' placeholder={translationEN.contact_us.message}></textarea>
                                                <button type='submit' className='bg-red w-20 mt2 ml1 br3 fw6 dim link grow white pa2 ba b--red'>Send</button>
                                            </form>
                                            <div className="contact_details  b--black">
                                                <p className='f3-ns contact_header fw6 red'>{translationEN.home_content.header}</p>
                                                <p className='contact_address fw6'>
                                                    Zone 6A, 3rd Floor, Indian Habitat Centre<br/>
                                                    Lodhi Road, New Delhi, India<br/>
                                                    011-24641853, 41504740<br/>
                                                    Contact Person:-<br/>
                                                    Sh. R. K. Verma<br/>
                                                    Email: aibtmf@rediffmail.com</p>
                                                <p className='f3-ns contact_header fw6 red'>
                                                    Account Number : 1234567890
                                                </p>
                                                <p className='f3-ns contact_header fw6 red'>
                                                    IFSC Code : IFB123456
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })()}
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}


export default Contactus;