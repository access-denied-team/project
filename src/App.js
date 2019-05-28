import React from 'react';

import Login from './components/login';
import SignupMain from './components/signupMain';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Map from './components/Map'
import './App.css';
import Accept from './components/AcceptComponent.js';
import Foo from './components/Rating.js';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';
import Rating from './components/Rating';




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
    render(){
      return(
        <div>
          <Accept
             mechinfo={this.state.mechinfo}
          />
          <Foo />
           {/* <Map/> */}
      <UserForm />
      <MechanicForm/>
        </div>
        )
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
         <Route exact path="/rating" component={Rating} />
         <Route exact path="/Map" component={Map} />
     </Router>
            
    );
  }

  }







export default App;
