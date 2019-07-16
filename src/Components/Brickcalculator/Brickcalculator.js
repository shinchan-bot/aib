import React, {Component } from 'react';
import 'tachyons';






class Brickcalculator extends Component{


    state={
        length:'',
        height:"",
        thickness:"",
        lu:"",
        hu:'',
        country:""
    }

    lenghtHandler(e){
        this.setState({length: e.target.value})
        console.log(this.state.length)

    }

    heightHandler(e){
        this.setState({height: e.target.value})

    }

    thicknessHandler(e){
        this.setState({thickness: e.target.value})


    }
    luHandler(e){
        this.setState({lu: e.target.value})
        console.log(this.state.lu)

    }

    huHandler(e){
        this.setState({hu: e.target.value})

    }
    tuHandler(e){

    }
    countryHandler(e){
        this.setState({country: e.target.value})

    }

    render(){
        return(
            <div>
                <form action='http://localhost:3001/calculate' method="POST">
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
                            <option value="0.0016" selected="selected">1/2</option>
                            <option value="0.2286">1</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose Country:</label>
                        <select class="w3-select w3-border dd1" name="country">
                            <option value="0.001683324">India (22.8 x 10.7 x 6.9 cm)</option>
                            <option value="0.0014324375">UK (21.5 x 10.25 x 6.5 cm)</option>
                            <option value="0.001017336">US (19.4 x 9.2 x 5.7 cm)</option>
                            <option value="0.0019228">Aus (23.0 x 11.0 x 7.6 cm)</option>
                        </select>

                    </div>
                    <button type='submit' className="ba b--black">CALCULATE</button>
                </form>
            </div>

        );
    }
}



export default Brickcalculator;