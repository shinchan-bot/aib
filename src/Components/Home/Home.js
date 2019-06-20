import React from 'react';
import Tachyons from 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Header1 from '../Header/Header';
import Header2 from '../Header2/Header2';
import '../../util/css/app.css';
import o from '../../util/assets1/1.jpg';
import Logo from '../../util/assets1/brick-logo.jpg'
import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Back from '../../util/assets1/transparent.png';
import Listofmembers from '../Listofmembers/Listofmembers';
import Listofmeetings from '../Listofmeetings/Listofmeetings';
import Homecontent from '../Homecontent/Homecontent';
import Googlemaps from '../Googlemaps/Googlemaps';
import Innovationcontent from '../Innovationcontent/Innovationcontent';
import Newscontent from '../Newscontent/Newscontent';
import Gallerycontent from '../Gallerycontent/Gallerycontent';
import Contactus from '../Contactus/Contactus';





const Home = () => {
    return(
        <Router>
            <div className='home'>       
                <Header2/>
                <Route  path='/home' component={Homecontent}/>
                <Route exact path='/management' component={Listofmembers}/> 
                <Route exact path='/listofmembers' component={Listofmembers}/> 
                <Route exact path='/innovations' component={Innovationcontent}/> 
                <Route exact path='/news' component={Newscontent}/> 
                <Route exact path='/listofmeetings' component={Listofmeetings}/>  
                <Route exact path='/gallery' component={Gallerycontent}/> 
                <Route exact path='/contactus' component={Contactus}/> 
                <Route exact path='/location' component={Googlemaps}/>            
            </div>
        </Router>
    )
}


export default Home;
