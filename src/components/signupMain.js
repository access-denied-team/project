
import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Userform from './Userform';
// import Mechanicform from './Mechanicform';

import { Redirect } from 'react-router-dom'

class SignupMain extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      choice:""
      };
    }
    handleChange(event) {
        this.setState({
          choice: event.target.value
        });
      }
<<<<<<< HEAD
      handleSubmit=(event)=> {
      //  event.preventDefault();
      
      
     
      }
      renderRedirect = () => {
        var x= this.state.choice;
       if (this.state.choice==='mechanist') {
        // alert(`You chose the ${x} `);
        return <Redirect to="/Mechanicform" />
      
      }else if(this.state.choice ==="user"){
       
        return <Redirect to="/Userform" />
      }   
=======
      handleSubmit(event) {
        event.preventDefault();
      
        alert(`You chose the ${this.state.choice} `);
      //  path="/SignupMain"
>>>>>>> 888c16310a8fb48e2bf9c0a085a51c90e4ed9740
      }
      renderRedirect = () => {
        if (this.state.choice==="mechanist") {
          return <Redirect to="/MechanicForm" />
        }else if(this.state.choice==="user"){
          return <Redirect to="/UserForm" />
        }

      
    }
    render() {
        return (
          <form  onSubmit={this.handleSubmit.bind(this)}>
           { this.renderRedirect()}
            <p>user or mechanist:</p>
            {this.renderRedirect()}
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="mechanist"
                    checked={this.state.choice === "mechanist"}
                    onChange={this.handleChange.bind(this)}
                  />
                  mechanist
                </label>
              </li>
              
              <li>
                <label>
                  <input
                    type="radio"
                    value="user"
                    checked={this.state.choice === "user"}
                    onChange={this.handleChange.bind(this)}
                  />
                  user
                </label>
              </li>
      
             
            </ul>
           
<<<<<<< HEAD

           
           
=======
            
           
        
>>>>>>> 888c16310a8fb48e2bf9c0a085a51c90e4ed9740
          </form>
        );
      }
  
  }

  export default SignupMain;