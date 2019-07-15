import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Machine1 from '../../util/assets1/hqdefault.png';
import Machine2 from '../../util/assets1/sketch-of-a-fixed-chimney-bulls-trench-kiln-fcbtk.png';



class Machinecontent extends Component {
    render(){
        return(
            <div className='machines bg-white  b--black'>
                <p className='f2 machine_header fw6'>INNOVATIONS AND MACHINES</p>
                <div className='machine_div  b--black'>
                    <p className='machine_name f4-ns '>Vertical Shaft Kiln</p>
                    <div className="machine  b--black">
                        <img src={Machine1} className='h-50-ns machine1  mt4' />
                        <div className='machine_details  b--black'>
                            <p className='machine_name '>Vertical Shaft Kiln</p>
                            <p className='fw6 machine_description'>Operation is round-the-clock and annual production of up to 60 lakh bricks has been achieved from commercial VSBK’s operating in India and across. The kiln can be operated throughout the year and even during monsoon time.</p>
                            <p className='f6 fw6 machine_detail'>
                                <i>
                                    A VSBK gives you unmatched flexibility of operation, good product quality and substantial saving in energy costs. You can plan a precise production schedule and produce exact quantity of bricks that you require. Once operational, loading and unloading is carried out simultaneously. In general, one batch of bricks is loaded (and one unloaded) every one and a half to two hours. The bricks remain inside the kiln for approximately 24 to 30 hours instead of the 20 to 30 days required with a BTK. This reduces the working capital substantially.The choice of fuel is based on cost considerations and the quality of product desired.Based on the location, coal and even lignite pellets are being used effectively. However proper firing control and optimum quality is achieved with a low volatile coal having a calorific value between 4000 – 5000 KCal/kg to raise the kiln temperature around 1100 degree centigrade. High calorific value coal is not recommended for VSBK operation. Recommended coal size is between 5 to 50 mm. In recent times where suitable coal is not available, VSBK has been operated with wastebiomass based green solid briquettes. It has the equivalent consumption to coal and produces identical quality.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='machine_div  b--black'>
                    <p className='machine_name f4-ns '>Hoffman Kiln</p>
                    <div className="machine  b--black">
                        <img src={Machine2} className='h-50-ns machine2 mt4' />
                        <div className='machine_details  b--black'>
                            <p className='machine_name '>Hoffman Kiln</p>
                            <p className='fw6 machine_description'>Along the brick kiln, every 4 to 5 meters, an inlet and outlet span is erected. The distance between each two spans is called a Ghamir. The roof of the brick kiln has some holes at regular distances of 60 to 70cm from each other. These holes are called carburetor-jets. Some valves for air vacuum are also available in the lower part of the brick kiln.</p>
                            <p className='f6 fw6 machine_detail'>
                                <i>
                                    To perform the baking process, the Ghamirs are loaded in an intersectional manner with bricks. The end of the Ghamirs are closed with a wall of bricks, and the span of the brick kiln is mudded. The carburetor-jets push the fuel mixture gas and air forcefully into the kiln through the holes of carburetor-jets. Through the vacuum produced by air valves, the fire is directed to all parts of the Ghamirs and the baking process is carried out.The temperature required for baking the mud-bricks is about 1000° centigrade, which should gradually be produced through pre-heating. When the stage of baking in every Ghamir is over, its air valves are closed, and the valves of the next Ghamir are opened in order to direct the fire towards itself. The carburetor-jets are also alternately moved on the roof of the kiln to apply the temperature evenly to all parts of the kiln.The baking work in every Ghamir lasts between 2.5 and 3 hours. After this time, some holes are made in the mudded area until the space of the Ghamir is gradually cooled. Then, the spans are opened and the baked blocks are transferred from inside the kiln to the trucks by conveyor strips
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Machinecontent;