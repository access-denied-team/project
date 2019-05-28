import React from 'react';
import SignupMain from './signupMain';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       loginDb:[
               {"username":"amer","password":"123","role":"user"},
                 {"username":"omar","password":"1234","role":"mechanic"}
                ,{"username":"khalid","password":"12345","role":"user"}
              ],
        name: '',
        greeting: ''
      };
    
      this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(event) {
      // event.preventDefault();
   var match=false;
    for(var i=0;i<event.target.length;i++){
      if(  this.state.loginDb[i].username===event.target[0].value && this.state.loginDb[i].password===event.target[1].value){
         match =true;
         var role=this.state.loginDb[i].role;
      }
      }
    
    if (match && role==="user"){
    alert("welcome user")
   }
    else if(match && role==="mechanic")
    {alert("welcome mechanic")}
     
    else (alert("pls sign up"))
    
    }
    render() {
      return (
  
        
                     
        <div>
              <form  onSubmit={this.handleSubmit}>
              <input type="text"  placeholder=" username"/> <br />
              <input type="password"  placeholder="password"/> <br />        
                <button>login</button> <br/>
              <br/> <a href="SignupMain">  Signup </a>
          </form>
        </div>     
      )
    }
  
  }

  export default Login