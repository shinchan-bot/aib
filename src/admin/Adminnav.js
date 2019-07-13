import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pushvendors from './Pushvendors';
import Pushgallery from './Pushgallery';
import Pushmeetings from './Pushmeetings';
import Pusharticles from './Pusharticles';





class Adminnav extends Component {
    
    render(){
        return(
            <div>
                <div className='mb0 main_header'>    
                    <div className="nav mt2 pb3 b--white">               
                        <div className="dropdownnew  b--white ">
                            <Link to="/addingnewmeeting">
                                <button className="white pointer fw6  grow ">Add Meetings</button>
                            </Link>
                        </div>
                        <div className="dropdownnew  b--white ">
                            <Link to="/addingnewarticle">
                                <button className="white pointer fw6  grow ">Add Articles</button>
                            </Link>
                        </div>
                        <div className="dropdownnew  b--white ">
                            <Link to='/addingnewvendor'>
                                <button className="white pointer fw6  grow ">Add Vendors</button>
                            </Link>
                        </div>
                        <div className="dropdownnew  b--white ">
                            <Link to='/addingnewgallery'>
                                <button className="white pointer fw6  grow ">Add Gallery</button>
                            </Link>
                        </div>                           
                    </div>
                </div>
                <Route exact path='/addingnewmeeting' component={Pushmeetings}/>                     
                <Route exact path='/addingnewarticle' component={Pusharticles}/>                     
                <Route exact path='/addingnewvendor' component={Pushvendors}/>                     
                <Route exact path='/addingnewgallery' component={Pushgallery}/>
            </div>
        );
    }
}

export default Adminnav;