import React,{Component} from 'react'
import 'tachyons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MyContext } from '../../context';


import Brick from '../../util/assets1/mtb-clay-bricks.jpg';
import Machine1 from '../../util/assets1/hqdefault.png';
import Machine2 from '../../util/assets1/sketch-of-a-fixed-chimney-bulls-trench-kiln-fcbtk.png';



class Machinecontent extends Component {
    render(){
        return(
            <div className='machines bg-white  b--black'>
                <p className='f2 fw6'>INNOVATIONS AND MACHINES</p>
                <div className='machine_div  b--black'>
                    <p className='machine_name f4 '>FCBTK</p>
                    <div className="machine  b--black">
                        <img src={Machine1} className='h-50' />
                        <div className='machine_details  b--black'>
                            <p className='machine_name '>FCBTK</p>
                            <p className='fw6 machine_description'>List of substances and methods banned for use in sports updated</p>
                            <p className='f6 fw6 machine_detail'>
                                <i>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    <br/>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='machine_div  b--black'>
                    <p className='machine_name f4 '>Zig Zag High Drought Kiln</p>
                    <div className="machine  b--black">
                        <img src={Machine2} className='h-50 mt4' />
                        <div className='machine_details  b--black'>
                            <p className='machine_name '>Zig Zag High Drought Kiln</p>
                            <p className='fw6 machine_description'>List of substances and methods banned for use in sports updated</p>
                            <p className='f6 fw6 machine_detail'>
                                <i>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    <br/>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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