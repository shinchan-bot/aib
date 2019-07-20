import React, {Component } from 'react';
import 'tachyons';






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
        console.log(this.state.bricks)

        return(
            <div>
                <form>
                    <div>
                        <label for="length">Wall Length</label>
                        <input onChange={(e) =>this.lenghtHandler(e)} type="text" name="length"/>
                        <select onChange={(e) =>this.luHandler(e)}  class="w3-select w3-border dd2" name="lu">
                            <option value="1" selected="selected">meter</option>
                            <option value="3.2808399">feet</option>
                        </select>
                    </div>
                    <div>
                        <label for="length">Wall Height</label>
                        <input onChange={(e) =>this.heightHandler(e)}  type="text" name="height"/>
                        <select onChange={(e) =>this.huHandler(e)}  class="w3-select w3-border dd2" name="hu">
                            <option value="1" selected="selected">meter</option>
                            <option value="3.2808399">feet</option>
                        </select>
                    </div>
                    <div>
                        <label for="length">Wall Thickness</label>
                        <select onChange={(e) =>this.thicknessHandler(e)}  class="w3-select w3-border dd2" name="tu">
                            <option value="0.1016" selected="selected">1/2</option>
                            <option value="0.2286">1</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose Country:</label>
                        <select onChange={(e) =>this.countryHandler(e)} class="w3-select w3-border dd1" name="country">
                            <option value="0.001683324">India (228 x 107 x 69 mm)</option>
                            {/* <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option> */}
                            <option value="0.001539">US (190 x 90 x 90 mm)</option>
                            <option value="0.002">Aus (200 x 100 x 100 mm)</option>
                        </select>

                    </div>
                    {/* <button onClick= {bricks} type='submit' className="ba b--black">CALCULATE</button>
                    <br/> */}
                    <div>
                        <label for="Bricks">Number of Bricks</label>
                        <input value={Math.floor(number)} type='text' />
                    </div>
                </form>
            </div>

        );
    }
}



export default Brickcalculator;