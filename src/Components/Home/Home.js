import React from 'react';
import Tachyons from 'tachyons';
import { Route } from "react-router-dom";
import { MyContext } from '../../context';
import BackgroundSlider from 'react-background-slider';



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
import Machinecontent from '../Machinecontent/Machinecontent';
import Notfound from '../Notfound/Notfound';



import BG1 from '../../util/assets1/bg11.jpg';
import BG2 from '../../util/assets1/bg10.jpg';
import BG3 from '../../util/assets1/bg9.jpg';


const Home = () => {
    return(
        <MyContext.Consumer>
        {(context) => (
            <React.Fragment>
                <div>
                <BackgroundSlider
                    images={[BG1,BG2,BG3]}
                    duration={5} transition={2} 
                />
                <Header1 context={context}/>
                    <Route exact path='/management' component={Listofmembers}/> 
                    <Route exact path='/listofmembers' component={Listofmembers}/> 
                    <Route exact path='/machines' component={Machinecontent}/> 
                    <Route exact path='/news' component={Newscontent}/> 
                    <Route exact path='/listofmeetings' component={Listofmeetings}/>  
                    <Route exact path='/gallery' component={Gallerycontent}/> 
                    <Route exact path='/contactus' component={Contactus}/> 
                    <Route exact path='/location' component={Googlemaps}/> 
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Homecontent}/>
                </div>
            </React.Fragment>
        )}
        </MyContext.Consumer>
                              
    )
}


export default Home;
