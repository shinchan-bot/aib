import React, {Component} from 'react';
import 'tachyons';
import { MyContext } from '../../context';

import * as translationEN from '../../translations/en.json';
import * as translationHIN from '../../translations/hindi.json';
import * as translationPUN from '../../translations/punjabi.json';
import * as translationGUJ from '../../translations/gujarati.json';
import * as translationMAR from '../../translations/marathi.json';



class Gallerycontent extends Component {
    render() {
        return(
            <div className='bg-white notfound '>
                <div className='notfound2 mb5'>
                    <p className='f2 fw6  center'>Error 404</p>
                    <p className='f4  center'>Sorry, this page doesn`t exist.</p> 
                </div>
                
                <p className='f4 bw6 mh5 red'> 
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
                    Please try the following:
                </p>
                <p className='mh5 '> 
                    Make sure that the Web site address displayed in the address bar of your browser is spelled and formatted correctly
                </p>
                <p className='mh5'>
                    If you reached this page by clicking a link, contact us to alert us that the link is incorrectly formatted
                </p>
            </div>
        );
    }
}

export default Gallerycontent;