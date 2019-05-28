import React from 'react';

import Login from './components/login';
import SignupMain from './components/signupMain';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Mapview from './components/Map'
import './App.css';
import Accept from './components/AcceptComponent.js';
import Foo from './components/Rating.js';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mechinfo:{ 
         userName:"oday ismail abueid",
         phoneNum:"78090332",
         mechImg:"https://thumbs.dreamstime.com/z/mechanical-engineer-29186038.jpg"
      }
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
         <Route exact path="/SignupMain" component={SignupMain} />
         <Route exact path="/map" component = {Mapview}/>
       
       
     </Router>
            
    );
  }

  }







export default App;
