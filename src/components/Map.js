import React from 'react';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";


export class Mapview extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
       super(props)
       this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace:{}      //Shows the infoWindow to the selected place upon a marker
      };
    }
    componentDidMount(){
      console.log(this.props.location.state.user)
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

      sendOrder(){
        
      }


    render()  {
        
        return(
          <div>
            
          <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={'current location'} />
          
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
            
          </InfoWindow>
        </CurrentLocation>
        
       <Link to="/UserForm"><Button variant="primary">Help</Button></Link> 
        
        </div>
        
        
        
        )
    }
}



 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCSd2zDkggemBpMYEeEvEo_E4RlQDxd6Po")
  })(Mapview)