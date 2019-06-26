import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';




const Listofmeetings = () => {
   
        return(
            <MyContext.Consumer>
                {(context) =>(
                    <div className='bg-white'>
                        {
                        (()=>{
                            if(context.state.language ==='hindi'){
                                 return <p className=''>{translationHIN.meeting_list.p}</p>
                            }else if(context.state.language ==='punjabi'){
                                return <p className=''>{translationPUN.p}</p>
                            }else if(context.state.language ==='gujarati'){
                                return <p className=''>{translationGUJ.p}</p>
                            }else if(context.state.language ==='marathi'){
                                return <p className=''>{translationMAR.p}</p>
                            }else{
                                return <p className=''>{translationEN.p}</p>
                            }
                        })()
                        }
                    </div>
                )}
            </MyContext.Consumer>
        

        );
}



export default Listofmeetings;