
import React, { Component } from 'react'
import 'tachyons';
import { MyContext } from '../../context';





import '../../util/css/app.css';
import Headernav from '../Header/Headernav';


class Languagenav extends Component {
  render() {
    return (
        <div className='languagenav_div' >
                    <Headernav/>
            <div className="dropdownnew   b--white ">
                    <button className="red f6 language_button  fw6  grow">Language</button>
                    <div className="dropdown_contentnew b--white ">
                        <a  
                            href=""
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="en"
                        >
                            English
                        </a>
                        <br/>
                        <a
                            href=""
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="hindi"
                        >
                            Hindi
                        </a>
                        <br/>
                        <a
                            href=""
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="punjabi"
                        >
                            Punjabi
                        </a>
                        <br/>
                        <a
                            href=""
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="gujarati"
                        >
                            Gujarati
                        </a>
                        <br/>
                        <a
                            href=""
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="marathi"
                        >
                            Marathi
                        </a>

                    </div>
                </div> 

        </div>  
    )
  }
}

export default Languagenav;