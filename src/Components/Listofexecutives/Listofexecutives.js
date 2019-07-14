import React,{ Component } from 'react';
import 'tachyons';
import '../../util/css/app.css';


import * as exec from '../../Helpers/executives.json';


class Listofexecutives extends Component {

    

    render(){

        const executive_array = exec.executives.map((executive, i) =>{
            return (
                <ul className='executive_list ba b--white br3 shadow-3 pt2 pb2 w-90 ml4'>
                    <li className="fw7"><span>Name:</span>{executive.FIELD1}</li>
                    <li className="fw4 green" ><span className='fw7'>Designation:</span>{executive.FIELD2}</li>
                    <li><span className="fw7">Contact:</span>{executive.FIELD3}</li>
                    <li>{executive.FIELD4}</li>
                    <li className="fw6">{executive.FIELD5}</li>
                    <li className='fw6'>{executive.FIELD6}</li>
                </ul>
            )
        
        })

        return(
            <div className='executives bg-white pa2'>
                <h1 className="tc bw6">
                    EXECUTIVES
                </h1>
                { executive_array }
            </div>            
        );
    }
}

export default Listofexecutives;