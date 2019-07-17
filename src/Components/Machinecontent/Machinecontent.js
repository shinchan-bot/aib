import React,{Component} from 'react'
import 'tachyons';
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';

import Machine1 from '../../util/assets1/hqdefault.png';
import Machine2 from '../../util/assets1/sketch-of-a-fixed-chimney-bulls-trench-kiln-fcbtk.png';



class Machinecontent extends Component {
    render(){
        return(
            <MyContext.Consumer>
            {(context)=>(
                <React.Fragment>
                    {(()=>{
                        if(context.state.language === 'hindi'){
                            return(
                                <div className='machines bg-white  b--black'>
                                    <p className='f2 machine_header fw6'>{translationHIN.machines.header}</p>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationHIN.machines.machine1}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine1} className='h-50-ns machine1  mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationHIN.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationHIN.machines.description1}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationHIN.machines.detail1}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationHIN.machines.machine2}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine2} className='h-50-ns machine2 mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationHIN.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationHIN.machines.description2}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationHIN.machines.detail2}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            );
                        }if(context.state.language === 'marathi'){
                            return(
                                <div className='machines bg-white  b--black'>
                                    <p className='f2 machine_header fw6'>{translationMAR.machines.header}</p>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationMAR.machines.machine1}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine1} className='h-50-ns machine1  mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationMAR.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationMAR.machines.description1}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationMAR.machines.detail1}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationMAR.machines.machine2}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine2} className='h-50-ns machine2 mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationMAR.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationMAR.machines.description2}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationMAR.machines.detail2}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            );
                        }else if(context.state.language === 'gujarati'){
                            return(
                                <div className='machines bg-white  b--black'>
                                    <p className='f2 machine_header fw6'>{translationGUJ.machines.header}</p>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationGUJ.machines.machine1}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine1} className='h-50-ns machine1  mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationGUJ.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationGUJ.machines.description1}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationGUJ.machines.detail1}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationGUJ.machines.machine2}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine2} className='h-50-ns machine2 mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationGUJ.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationGUJ.machines.description2}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationGUJ.machines.detail2}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            );
                        }else if(context.state.language === 'punjabi'){
                            return(
                                <div className='machines bg-white  b--black'>
                                    <p className='f2 machine_header fw6'>{translationPUN.machines.header}</p>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationPUN.machines.machine1}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine1} className='h-50-ns machine1  mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationPUN.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationPUN.machines.description1}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationPUN.machines.detail1}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationPUN.machines.machine2}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine2} className='h-50-ns machine2 mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationPUN.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationPUN.machines.description2}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationPUN.machines.detail2}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            );
                        }else{
                            return(
                                <div className='machines bg-white  b--black'>
                                    <p className='f2 machine_header fw6'>{translationEN.machines.header}</p>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationEN.machines.machine1}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine1} className='h-50-ns machine1  mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationEN.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationEN.machines.description1}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationEN.machines.detail1}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='machine_div  b--black'>
                                        <p className='machine_name f4-ns '>{translationEN.machines.machine2}</p>
                                        <div className="machine  b--black">
                                            <img alt='machine' src={Machine2} className='h-50-ns machine2 mt4' />
                                            <div className='machine_details  b--black'>
                                                <p className='machine_name '>{translationEN.machines.machine1}</p>
                                                <p className='fw6 machine_description'>{translationEN.machines.description2}</p>
                                                <p className='f6 fw6 machine_detail'>
                                                    <i>
                                                       {translationEN.machines.detail2}
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            );
                        }


                    })()}
                    </React.Fragment>
                )}
            </MyContext.Consumer>

        );
    }
}


export default Machinecontent;