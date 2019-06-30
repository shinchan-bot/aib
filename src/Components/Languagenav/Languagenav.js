
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'tachyons';
import { MyContext } from '../../context';


import '../../util/css/app.css';


class Languagenav extends Component {
  render() {
    return (
                <div className="dropdownnew   b--white ">
                    <button className="red  fw6  grow">Language</button>
                    <div className="dropdown_contentnew b--white ">
                        <a
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="en"
                        >
                            English
                        </a>
                        <br/>
                        <a
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="hindi"
                        >
                            Hindi
                        </a>
                        <br/>
                        <a
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="punjabi"
                        >
                            Punjabi
                        </a>
                        <br/>
                        <a
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="gujarati"
                        >
                            Gujarati
                        </a>
                        <br/>
                        <a
                            className="pointer grow dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="marathi"
                        >
                            Marathi
                        </a>

                    </div>
                </div>   
    )
  }
}

export default Languagenav;