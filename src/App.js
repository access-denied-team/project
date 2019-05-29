import React from 'react';

import Login from './components/login';
import SignupMain from './components/signupMain';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mechtasks from './components/Mechtasks';
import './App.css';
import Mapview from './components/Map'
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
        <Route exact path="/Map" component={Map} />
        <Route exact path="/Mechtasks" component={Mechtasks} />


         <Route exact path="/SignupMain" component={SignupMain} />
<<<<<<< HEAD
         <Route exact path="/rating" component={Rating} />
         <Route exact path="/Map" component={Map} />
=======
         <Route exact path="/map" component = {Mapview}/>
       
       
>>>>>>> a76c8c2d7be68a6b0b2082fd42b4af065979c06f
     </Router>
            
    );
  }

  }







export default App;
