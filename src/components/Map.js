import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Mapview extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state ={
            place:""
        }
    }

    render()  {
        const mapStyles = {
            width: '75%',
            height: '75%',
            marginLeft:"10%",
            marginTop:"5%"
          };
        return(<div>
           
            <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 31.963158, lng: 35.930359}}
        />
        </div>)
    }
}



 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDG32A-AqXPqbflJDOc-pR9tIxbzwFTS2M")
  })(Mapview)