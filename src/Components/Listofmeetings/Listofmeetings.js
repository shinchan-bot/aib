import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';


import {meetings} from '../../Helpers/meetings';



class Listofmeetings extends Component {
        
    state = {
        num:'0',
    }

    render(){


        let meeting_handler = (num) =>{
            return(
                this.setState({num : num })
        
            );
        }
        
        const meeting_array = meetings.map((user,num) =>{
            return(
                <div className="bt bb bw1 b--gray br3 mb2 pa2">
                    <p data-key={num} key={num} onClick={() =>meeting_handler(num)} className="red link pointer dim "><i>{meetings[num].date}</i></p>
                    <p  className="meet">{meetings[num].description}</p>
                </div> 
            );           
        });


        
        return(
            <div className='meetings ba b--black pa2'>
                <h1 className="center">
                    MEETINGS
                </h1>
                <div className="meeting_box_combine  b--black" >
                    <div className="meeting_list_box ba b--white br4 shadow-5">
                        <h3 className="meeting_list_header f3 fw8 ba b--gray bw1 shadow-2 br4 pa2 tc bg-white ">Meetings in the past.</h3>
                        {meeting_array}
                    </div>
                    <div className="meeting_details bt bb bw2 b--black br4 mb2 mt4 pa2 shadow">
                        <h3 className="f3 fw8">{meetings[Number(this.state.num)].title}</h3>
                        <p className='f4 fw5 red'><i>{meetings[Number(this.state.num)].description}</i></p>
                        <p className="f5 fw7 mt4 tj "><i>{meetings[Number(this.state.num)].details}</i></p>
                    </div>
                    
                </div>
            </div>
    
        )

    }
   
}

export default Listofmeetings;