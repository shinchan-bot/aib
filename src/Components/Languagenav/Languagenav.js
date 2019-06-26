
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'tachyons';
import { MyContext } from '../../context';



// Import CSS
import '../../util/css/app.css';

// Import translations
// import * as translationCZ from '../../translations/cz.json'
// import * as translationDE from '../../translations/de.json'
// import * as translationEN from '../../translations/en.json'
// import * as translationFR from '../../translations/fr.json'

class Languagenav extends Component {
  render() {
    return (
                <div className="dropdownnew   b--white ">
                    <button className="white  fw6  grow">Language</button>
                    <div className="dropdown_contentnew  b--white ">
                        <a
                            className="pointer dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="en"
                        >
                            English
                        </a>
                        <br/>
                        <a
                            className="pointer dim link mt1 optionnew"
                            onClick={this.props.context.changeLanguage}
                            data-language="hindi"
                        >
                            Hindi
                        </a>
                    </div>
                </div>   
    )
  }
}

export default Languagenav;