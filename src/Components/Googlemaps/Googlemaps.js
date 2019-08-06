import React, {Component} from 'react';
import 'tachyons';
import GoogleMapReact from 'google-map-react';
require("dotenv").config();

const style = {
    width: '100%',
    height: '100%'
  }


class Googlemaps extends Component {
    static defaultProps = {
        center: {
          lat: 28.590302,
          lng: 77.225778
        },
        zoom: 18
      };
    
    render(){

        return(
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBPZVASh86UGWQhve9wKKSTLzQXepHozic' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <GoogleMapReact
                    lat={28.590302}
                    lng={77.225778}
                    text="ALL INDIA BRICKS AND TILE MANUFACTURING FEDERATION"
                />
                </GoogleMapReact>
            </div>

        );
    }
}


export default Googlemaps;