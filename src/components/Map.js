import React from 'react';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
import Rating from "../components/Rating"
;
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import App from "../App.js"
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


export class Mapview extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
       super(props)
       this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace:{},   //Shows the infoWindow to the selected place upon a marker
        show:false
      };
    }
    componentDidMount(){
    //  console.log(this.props.location.state.user)
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
    
  checkstatus(){
    if(this.state.show){
     return <Redirect to="/Accept" />}
      
    };
   
    time(){
      var that =this
        setTimeout(()=>{
          that.setState({
            show:true
          })
        },4000)
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

          

         <div>
         <Fab onClick={this.time.bind(this)} style={{    position: "absolute",
    
    marginLeft: "45%",
    marginTop:"40%"}} variant="extended" color="primary" aria-label="Add" >
          <NavigationIcon  />
          Efz3li
        </Fab>
         
         {this.state.show === true ? this.checkstatus() :null}
         </div>


        </div>
        
        
        
        )
    }
}



 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCSd2zDkggemBpMYEeEvEo_E4RlQDxd6Po")
  })(Mapview)
  