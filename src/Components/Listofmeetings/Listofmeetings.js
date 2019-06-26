import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';



const Listofmeetings = () => {
   
        return(
            <MyContext.Consumer>
                {(context) =>(
                    <div>
                        {
                        (()=>{
                            if(context.state.language ==='hindi'){
                                 return <p className='white'>{translationHIN.p}</p>
                            }else{
                                return <p className='white'>{translationEN.p}</p>
                            }
                        })()
                        }
                    </div>
                )}
            </MyContext.Consumer>
        

        );
}



export default Listofmeetings;