import React from 'react';

import Login from './components/login';
import SignupMain from './components/signupMain';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mechtasks from './components/Mechtasks';

import Mapview from './components/Map'

import Accept from './components/AcceptComponent.js';
import Foo from './components/Rating.js';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';
import Rating from './components/Rating';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[
        {
          username:'Odayabueid',
          password:"1111",
          imgUrl:"",
          phoneNum:"0780049003",
          Role:"mechanical"
        },
        {
          username:'Amer',
          password:"1111",
          imgUrl:"",
          phoneNum:"0798877643",
          Role:"user"
        },
        {
          username:'Yasser',
          password:"1111",
          imgUrl:"",
          phoneNum:"0797634281",
          Role:"user"
        },
        {
          username:'Shareef',
          password:"1111",
          imgUrl:"",
          phoneNum:"0797634281",
          Role:"mechanical"
        }
      ] 
  
      // mechinfo:{ 
      //    userName:"oday ismail abueid",
      //    phoneNum:"78090332",
      //    mechImg:"https://thumbs.dreamstime.com/z/mechanical-engineer-29186038.jpg"
      // }
    };
    
  }
    


  render() {
    return (
                
      // <div>
      //      <Login/>
      // </div>
      
       <Router>
         
         <Route exact path="/" component={Login} /> 
         <Route exact path="/Login" component={Login} />
         <Route exact path="/MechanicForm" component={MechanicForm} />
        <Route exact path="/Mechtasks" component={Mechtasks} />

        <Route exact path="/UserForm" component={UserForm} />

         <Route exact path="/SignupMain" component={SignupMain} />
         <Route exact path="/map" component = {Mapview}/>
         <Route exact path="/UserForm" component={UserForm}/>
       
       
     </Router>
            
    );
  }

  }







export default App;
