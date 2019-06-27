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




const meeting_detail = (e) => {
    
}


class Listofmeetings extends Component {
        
    state = {
        num:'0',
    }

    render(){


        let meeting_handler = (e) =>{
            return(
                this.setState({num : e.target.getAttribute('data-key') })
        
            );
        }
        
        const meeting_array = meetings.map((user,num) =>{
            return(
                <div key={num} onClick={meeting_handler}  className="ba b--black">
                    <p className="red">{meetings[num].date}</p>
                    <p data-key={num} className="meet">{meetings[num].description}</p>
                </div> 
            );           
        });


        
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