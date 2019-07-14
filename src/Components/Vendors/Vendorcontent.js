import React, { Component } from 'react';
import 'tachyons';
import axios from 'axios';


import Vendors from './Vendors';


class Vendorcontent extends Component{

    constructor(props){
        super(props);
        this.state= {
            vendordata:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/fetchvendors')
            .then((response) =>{
                this.setState({vendordata: response.data});
                console.log(response);
            });
    }


    render(){
        return(
            <Vendors/>
        );
    }
}

export default Vendorcontent;