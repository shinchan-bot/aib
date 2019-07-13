import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {meeting, meetings} from '../Helpers/meetings';



class Pushmeetings extends Component {
    state={
        titleInput:"",
        dateInput:"",
        descriptionInput:"",
        detailsInput:"",
    }

    titleChangeHandler = (e) => {
        this.setState({title:e.target.value})
        console.log(e.target.value)

    }

    dateChangeHandler = (e) => {
        this.setState({date:e.target.value})
        console.log(e.target.value)
        
    }
    descriptionChangeHandler = (e) => {
        this.setState({description:e.target.value})
        console.log(e.target.value)
        
    }
    detailsChangeHandler = (e) => {
        this.setState({details:e.target.value})
        console.log(e.target.value)
        
    }


    submitMeetingHandleer = () =>{
        const meetingsData ={
            ...this.state
        }
    }


    render(){        


        return(              
            <div>
                <form className='admin_meeting_form'>
                    <p>Meeting Details</p>
                    <input onChange={this.titleChangeHandler} type='text' placeholder='Title' name='title'/>
                    <input onChange={this.dateChangeHandler} type='date'/>
                    <input onChange={this.descriptionChangeHandler} type='textarea' placeholder='description' name='description'/>
                    <input onChange={this.detailsChangeHandler} type='textarea' placeholder='details' name='details'/>
                    <button onClick={this.submitMeetingHandleer} className="bg-yellow" type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Pushmeetings;