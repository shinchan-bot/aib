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
        axios.get('http://localhost:3001/fetchnews')
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
                <div className=" bl bb b--gray br4 mb2 shadow-2 pa2">
                    
                    <p data-key={num} key={num} onClick={() =>news_handler(num)} className="red link pointer dim "><i>{newsPostsstore[num].date}</i></p>
                    <p  className="meet f4 fw6">{newsPostsstore[num].heading}</p>
                    <p  className="meet f5 ">{newsPostsstore[num].description}</p>
                    <p  className="meet f6 fw6">{newsPostsstore[num].details}</p>

                </div> 
            );           
        });


        return(
            <div className=' bg-white w-100 ba b--black pa2'>
                <h1 className="tc f4">
                    NEWS
                </h1>
                    <div className="meeting_list_box news_list_box w-100 bt bb bw1 b--black br4 shadow-5">
                        {news_array}
                    </div>
            </div>
        );
    }
}


export default Newscontent;