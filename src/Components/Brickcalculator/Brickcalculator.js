import React, {Component } from 'react';
import 'tachyons';
import { MyContext } from '../../context';



import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';







class Brickcalculator extends Component{


    state={
        length:'',
        height:"",
        thickness:"0.1016",
        lu:"1",
        hu:'1',
        country:"0.001683324",
        bricks:"4"
    }

    lenghtHandler(e){
        return(
            this.setState({length: e.target.value})
        )
    }

    heightHandler(e){
        this.setState({height: e.target.value})

    }

    thicknessHandler(e){
        return(
            this.setState({thickness: e.target.value})
        )

    }
    luHandler(e){
        return(this.setState({lu: e.target.value})
        )
    }

    huHandler(e){
        return(
            this.setState({hu: e.target.value})
        )
    }
    tuHandler(e){
        return(
            this.setState({tu: e.target.value})
        )
    }
    countryHandler(e){
        return(
            this.setState({country: e.target.value})
        )
    }

    
   
    render(){
        const number = Number(this.state.length) * Number(this.state.height) * Number(this.state.thickness) / Number(this.state.lu) / Number(this.state.hu) / Number(this.state.country);

        return(
            <MyContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                        {(()=>{
                            if(context.state.language === 'hindi'){
                                return(
                                    <form className='brick_calculator'>
                                        <div className='brick_calculator_field' >
                                            <label className='calculator_field1' for="length">{translationHIN.home_slides.length}</label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.lenghtHandler(e)} type="text" name="length"/>
                                                <select className='calculator_field3' onChange={(e) =>this.luHandler(e)}  name="lu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div >
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="height">{translationHIN.home_slides.height} </label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.heightHandler(e)}  type="text" name="height"/>
                                                <select className='calculator_field3' onChange={(e) =>this.huHandler(e)}  name="hu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="thickness"> {translationHIN.home_slides.thickness} </label>
                                            <select className='calculator_field3' id='calculator_field3' onChange={(e) =>this.thicknessHandler(e)}   name="tu">
                                                <option  value="0.1016" selected="selected">1/2 {translationHIN.home_slides.brick}</option>
                                                <option value="0.2286">1 {translationHIN.home_slides.brick}</option>
                                            </select>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1'>{translationHIN.home_slides.bricksize}</label>
                                            <select className='calculator_field3' onChange={(e) =>this.countryHandler(e)}name="country">
                                                <option value="0.001683324">Size (228 x 107 x 69 mm)</option>
                                                {/* <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option> */}
                                                <option  value="0.001539">Size (190 x 90 x 90 mm)</option>
                                                <option value="0.002">Size (200 x 100 x 100 mm)</option>
                                            </select>

                                        </div>
                                        {/* <button onClick= {bricks} type='submit' className="ba b--black">CALCULATE</button>
                                        <br/> */}
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="Bricks">{translationHIN.home_slides.bricks}</label>
                                            <input className='input' value={Math.floor(number)} type='text' />
                                        </div>
                                    </form>
                                )

                            }else if(context.state.language === 'punjabi'){
                                return(
                                    <form className='brick_calculator'>
                                        <div className='brick_calculator_field' >
                                            <label className='calculator_field1' for="length">{translationPUN.home_slides.length}</label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.lenghtHandler(e)} type="text" name="length"/>
                                                <select className='calculator_field3' onChange={(e) =>this.luHandler(e)}  name="lu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div >
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="height">{translationPUN.home_slides.height} </label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.heightHandler(e)}  type="text" name="height"/>
                                                <select className='calculator_field3' onChange={(e) =>this.huHandler(e)}  name="hu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="thickness"> {translationPUN.home_slides.thickness} </label>
                                            <select className='calculator_field3' id='calculator_field3' onChange={(e) =>this.thicknessHandler(e)}   name="tu">
                                                <option  value="0.1016" selected="selected">1/2 {translationPUN.home_slides.brick}</option>
                                                <option value="0.2286">1 {translationPUN.home_slides.brick}</option>
                                            </select>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1'>{translationPUN.home_slides.bricksize}</label>
                                            <select className='calculator_field3' onChange={(e) =>this.countryHandler(e)}name="country">
                                                <option value="0.001683324">Size (228 x 107 x 69 mm)</option>
                                                {/* <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option> */}
                                                <option  value="0.001539">Size (190 x 90 x 90 mm)</option>
                                                <option value="0.002">Size (200 x 100 x 100 mm)</option>
                                            </select>

                                        </div>
                                        {/* <button onClick= {bricks} type='submit' className="ba b--black">CALCULATE</button>
                                        <br/> */}
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="Bricks">{translationPUN.home_slides.bricks}</label>
                                            <input className='input' value={Math.floor(number)} type='text' />
                                        </div>
                                    </form>
                                )

                            }else if(context.state.language === 'marathi'){
                                return(
                                    <form className='brick_calculator'>
                                        <div className='brick_calculator_field' >
                                            <label className='calculator_field1' for="length">{translationMAR.home_slides.length}</label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.lenghtHandler(e)} type="text" name="length"/>
                                                <select className='calculator_field3' onChange={(e) =>this.luHandler(e)}  name="lu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div >
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="height">{translationMAR.home_slides.height} </label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.heightHandler(e)}  type="text" name="height"/>
                                                <select className='calculator_field3' onChange={(e) =>this.huHandler(e)}  name="hu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="thickness"> {translationMAR.home_slides.thickness} </label>
                                            <select className='calculator_field3' id='calculator_field3' onChange={(e) =>this.thicknessHandler(e)}   name="tu">
                                                <option  value="0.1016" selected="selected">1/2 {translationMAR.home_slides.brick}</option>
                                                <option value="0.2286">1 {translationMAR.home_slides.brick}</option>
                                            </select>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1'>{translationMAR.home_slides.bricksize}</label>
                                            <select className='calculator_field3' onChange={(e) =>this.countryHandler(e)}name="country">
                                                <option value="0.001683324">Size (228 x 107 x 69 mm)</option>
                                                {/* <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option> */}
                                                <option  value="0.001539">Size (190 x 90 x 90 mm)</option>
                                                <option value="0.002">Size (200 x 100 x 100 mm)</option>
                                            </select>

                                        </div>
                                        {/* <button onClick= {bricks} type='submit' className="ba b--black">CALCULATE</button>
                                        <br/> */}
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="Bricks">{translationMAR.home_slides.bricks}</label>
                                            <input className='input' value={Math.floor(number)} type='text' />
                                        </div>
                                    </form>
                                )

                            }else if(context.state.language === 'gujarati'){
                                return(
                                    <form className='brick_calculator'>
                                        <div className='brick_calculator_field' >
                                            <label className='calculator_field1' for="length">{translationGUJ.home_slides.length}</label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.lenghtHandler(e)} type="text" name="length"/>
                                                <select className='calculator_field3' onChange={(e) =>this.luHandler(e)}  name="lu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div >
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="height">{translationGUJ.home_slides.height} </label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.heightHandler(e)}  type="text" name="height"/>
                                                <select className='calculator_field3' onChange={(e) =>this.huHandler(e)}  name="hu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="thickness"> {translationGUJ.home_slides.thickness} </label>
                                            <select className='calculator_field3' id='calculator_field3' onChange={(e) =>this.thicknessHandler(e)}   name="tu">
                                                <option  value="0.1016" selected="selected">1/2 {translationGUJ.home_slides.brick}</option>
                                                <option value="0.2286">1 {translationGUJ.home_slides.brick}</option>
                                            </select>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1'>{translationGUJ.home_slides.bricksize}</label>
                                            <select className='calculator_field3' onChange={(e) =>this.countryHandler(e)}name="country">
                                                <option value="0.001683324">Size (228 x 107 x 69 mm)</option>
                                                {/* <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option> */}
                                                <option  value="0.001539">Size (190 x 90 x 90 mm)</option>
                                                <option value="0.002">Size (200 x 100 x 100 mm)</option>
                                            </select>

                                        </div>
                                        {/* <button onClick= {bricks} type='submit' className="ba b--black">CALCULATE</button>
                                        <br/> */}
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="Bricks">{translationGUJ.home_slides.bricks}</label>
                                            <input className='input' value={Math.floor(number)} type='text' />
                                        </div>
                                    </form>
                                )

                            }else{
                                return(
                                    <form className='brick_calculator'>
                                        <div className='brick_calculator_field' >
                                            <label className='calculator_field1' for="length">{translationEN.home_slides.length}</label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.lenghtHandler(e)} type="text" name="length"/>
                                                <select className='calculator_field3' onChange={(e) =>this.luHandler(e)}  name="lu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div >
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="height">{translationEN.home_slides.height} </label>
                                            <div className='select_div'>
                                                <input className='input' id="input2" onChange={(e) =>this.heightHandler(e)}  type="text" name="height"/>
                                                <select className='calculator_field3' onChange={(e) =>this.huHandler(e)}  name="hu">
                                                    <option value="1" selected="selected">meter</option>
                                                    <option value="3.2808399">feet</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="thickness"> {translationEN.home_slides.thickness} </label>
                                            <select className='calculator_field3' id='calculator_field3' onChange={(e) =>this.thicknessHandler(e)}   name="tu">
                                                <option  value="0.1016" selected="selected">1/2 {translationEN.home_slides.brick}</option>
                                                <option value="0.2286">1 {translationEN.home_slides.brick}</option>
                                            </select>
                                        </div>
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1'>{translationEN.home_slides.bricksize}</label>
                                            <select className='calculator_field3' onChange={(e) =>this.countryHandler(e)}name="country">
                                                <option value="0.001683324">Size (228 x 107 x 69 mm)</option>
                                                {/* <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option> */}
                                                <option  value="0.001539">Size (190 x 90 x 90 mm)</option>
                                                <option value="0.002">Size (200 x 100 x 100 mm)</option>
                                            </select>

                                        </div>
                                        {/* <button onClick= {bricks} type='submit' className="ba b--black">CALCULATE</button>
                                        <br/> */}
                                        <div className='brick_calculator_field'>
                                            <label className='calculator_field1' for="Bricks">{translationEN.home_slides.bricks}</label>
                                            <input className='input' value={Math.floor(number)} type='text' />
                                        </div>
                                    </form>
                                );

                            }

                        })()}
                    </React.Fragment>
                )}
            </MyContext.Consumer>
            
        );
    }
}



export default Brickcalculator;