import React from 'react';
import Login from './components/login';
import SignupMain from './components/signupMain';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
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
       
       
     </Router>
            
    );
  }

}


export default App;
