import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';
import axios from 'axios';





class Newscontent extends Component {


    constructor(props){
        super(props);
        this.state = {
            num:'0',
            news:[],
        }

    }

    componentDidMount(){
        axios.get('https://tranquil-eyrie-69509.herokuapp.com/fetchnews')
            .then(response =>{
                this.setState({news:response.data});
            });
    }
    
    render(){
        let newsPostsstore = this.state.news

        let news_handler = (num) =>{
            return(
                this.setState({num : num })
        
            );
        }
        const news_array = newsPostsstore.map((user,num) =>{
            return(
                <div className=" bl bb b--gray br3 mb2 shadow-2 pa2">
                    
                    <p data-key={num} key={num} onClick={() =>news_handler(num)} className="red   ">Date: <i>{newsPostsstore[num].date}</i></p>
                    <p  className="meet f4 fw6">News: {newsPostsstore[num].heading}</p>
                    <p  className="meet red f5 ">Description: {newsPostsstore[num].description}</p>
                    <p  className="meet f6 fw6">{newsPostsstore[num].details}</p>

                </div> 
            );           
        });


        return(
            <div className=' bg-white w-100 ba b--black pa2'>
                <h1 className="tc  news_header">
                    NEWS
                </h1>
                    <div className="meeting_list_box news_list_box w-100 bt bb bw1 b--black br3 shadow-5">
                        {news_array}
                    </div>
            </div>
        );
    }
}


export default Newscontent;