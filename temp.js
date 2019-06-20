    <Members/>
      <Workes/>
      <Meetings/>
      <Gallery/>    


        <div className = 'slides  b--white pa2'>
            <div className="scroll_div  b--yellow pa2">
                <div className="slide pa2  b--white">
                    <div className='slide_text'>
                        <p className="f1 fw6 slide_header" id="slide_header">How to choose bricks?</p>
                        <p className="white f3 slide_header">The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>
                    </div> 
                    <img src={Brick} className='slide_bricks' />
                </div>
            </div>                 
        </div>



      28.590302, 77.225778

      AIzaSyCLTxXcdTNqSA01d6NPn1zdFXauMaYDUKM

        <div className="slide pa2 ba b--white">
            <div className='slide_text'>
                <p className="f1 fw6 slide_header" id="slide_header">How to choose bricks?</p>
                <p className="white f3 slide_header">The material that your house is built from also forms the foundation (literally) of its aesthetic appeal. The colour, shape, size and texture of the bricks you choose will influence the overall look and feel of your house. Before you make your final decision, it’s worth gathering ideas from the internet, display homes, websites and magazines….more.</p>
            </div> 
            <img src={Brick} className='slide_bricks' />
        </div>





import React, {Component} from 'react'
import ReactDom from  'react-dom';
import 'tachyons';

import {meetings} from '../../Helpers/meetings';





const meeting_array = meetings.map((user,num) =>{
    return(
        <div key={num} onClick={meeting_handler}  className="ba b--black">
            <p className="red">{meetings[num].date}</p>
            <p data-key={num} className="meet">{meetings[num].description}</p>
        </div> 
    );           
});


const meeting_detail = (e) => {
    
}


class Listofmeetings extends Component {
        
    state = {
        num:'0',
    }


    meeting_handler = (e) =>{
        return(
            this.setState({num : e.target.getAttribute('data-key') })
    
        );
    }


    render(){
        
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