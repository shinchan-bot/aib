import React, { Component } from 'react';
import 'tachyons';
import axios from 'axios';




class Vendorcontent extends Component{

    constructor(props){
        super(props);
        this.state= {
            vendordata:[]
        }
    }

    componentDidMount(){
        axios.get('https://tranquil-eyrie-69509.herokuapp.com/fetchvendors')
            .then((response) =>{
                this.setState({vendordata: response.data});
                console.log(response.data);
            });
    }


    render(){
        const executive_array = this.state.vendordata.map((vendor, i) =>{
            return (
                <ul className='executive_list ba b--white br3 shadow-3 pt2 pb2 w-90 ml4'>
                    <li className="vendor_list fw7"><span>STATE: </span>{vendor.state}</li>
                    <ul className='executive_list'>
                        <li className="vendor_list fw4 green" ><span className='fw7'>NAME :  </span>{vendor.name.toUpperCase()}</li>
                        <li><span className="vendor_list fw7">CONTACT : </span>{vendor.contact.toUpperCase()}</li>
                        <li><span className="vendor_list fw7">ADDRESS : </span>{vendor.address.toUpperCase()}</li>                    
                    </ul>
                </ul>
            )
        
        })

        return(
            <div className='executives bg-white pa2'>
                <h1 className="list_of_members_header tc bw6">
                    Vendors
                </h1>
                { executive_array }
            </div>            
        );
    }
}

export default Vendorcontent;