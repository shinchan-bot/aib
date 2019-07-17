import React, {Component} from 'react';
import 'tachyons';
import GoogleMapReact from 'google-map-react';



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
                bootstrapURLKeys={{ key: 'AIzaSyALRPbHdbhpD7Jzpb2CzyubbdvQIDslizU' }}
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