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
            num:'Hi',
            meetingPosts:[],
        }

    

    componentDidMount(){
        axios.get('http://localhost:3001/fetchmeetings')
            .then((response) =>{
                this.setState({meetingPosts: response.data});
                this.setState({num: response.data[0]});
                console.log(response.data);
            });
    }

   
    render(){
        let meetingPostsstore = this.state.meetingPosts;


        let meeting_handler = (user) =>{
            return(
                this.setState({num : user })
        
            );
        }
        const meeting_array = meetingPostsstore.map((user,num) =>{
            return(
                <div className="bl bb b--gray br4 mb2 shadow-2 pa2">
                    <p className='meeting_date' data-key={user} key={user} onClick={() =>meeting_handler(user)} className="red link pointer dim "><i>{user.date}</i></p>
                    <p  className="meet">{user.description}</p>
                </div> 
            );           
        });

        const data = (
                this.state.meetingPosts 
                ?
                    <div className="meeting_details bt bb bw2 b--black br4 mb2 mt4 pa2">
                        <h3 className="meeting_title fw8">{this.state.num.title}</h3>
                        <p className='meeting_description  fw5 red'><i>{this.state.num.description}</i></p>
                        <p className="meeting_detail fw7 mt4 tj "><i>{this.state.num.details}</i></p>
                    </div>
                :
                <div></div>
                
        );


      
        return(
            
            <div className='meetings ba b--black pa2'>
                <h1 className="center meetings_header">
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