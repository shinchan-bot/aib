import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


import { MyProvider } from './context';
import './index.css';
import Home from './Components/Home/Home';
import * as serviceWorker from './serviceWorker';



class App extends Component {
  
    render(){
      return (
        <MyProvider>
          <BrowserRouter>
            <Home/>
          </BrowserRouter>
        </MyProvider> 
      );
    }
  }

ReactDOM.render(<App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
