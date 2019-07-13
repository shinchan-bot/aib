import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter} from "react-router-dom";
import Adminnav from './Adminnav';



const admin = {
    login:"a",
    password:'a',
    loginStatus:false
}



class Admin extends Component {

    state ={
        loginInput:"",
        passwordInput:'',
        loginStatus:"false"
    }

    loginChangeHandler = (e) =>{
            this.setState({loginInput:e.target.value})
    }


    passwordChangeHandler = (e) => {
        this.setState({passwordInput:e.target.value})
    }

    loginHandler = () =>  {
        if(this.state.loginInput === admin.login && this.state.passwordInput === admin.password){
            return this.setState({loginStatus:"true"})
        }
    }

    render(){
        

        return(
            <div>
                {
                    this.state.loginStatus === "false" ?
                    <div>
                        <p className="white">Login</p>
                        <input
                            type="text" 
                            className=""
                            onChange={this.loginChangeHandler}
                            />
                        <p className="white">Password</p>
                        <input 
                            type='password'
                            onChange= {this.passwordChangeHandler}
                            />
                        <br/>
                        <button onClick={this.loginHandler} className="bg-white mt2 link grow dim" type='submit' placeholder='Login'>Login</button>
                    </div>
                    :
                    <BrowserRouter>
                        <Adminnav/>                                     
                    </BrowserRouter>
                }
            </div>
        );
    }
}


export default Admin;