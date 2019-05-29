import React from 'react';
import SignupMain from './signupMain';
import Mechtasks from './Mechtasks';
import Map from './Map'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Login extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     loginDb:[
         {
           "username":'Odayabueid',
           "password":"1111",
           "imgUrl":"",
           "phoneNum":"0780049003",
           "Role":"mechanical"
         },
         {
           "username":'Amer',
           "password":"1111",
           "imgUrl":"",
           "phoneNum":"0798877643",
           "Role":"user"
         }
          ],
     tasks:[
       {
         username:"lolo",
         phonenumber:"0893284"
       },
       {
         username:"lama",
         phonenumber:"0899933"
       }
     ],
     logsuc:0
     };
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
     event.preventDefault();
  var match=false;
  console.log(event.target[0].value)
  console.log(this.state.loginDb[1].username)
   for(var i=0;i<this.state.loginDb.length;i++){
     if(this.state.loginDb[i].username === event.target[0].value && this.state.loginDb[i].password===event.target[1].value){
        match =true;
        var role=this.state.loginDb[i].Role;
     }
     }

   if (match && role==="user"){
   alert("welcome user")
   this.setState({
     logsuc:1
   },function(){
     alert(this.state.logsuc)
   })

  }
   else if(match && role==="mechanical"){
     this.setState({
     logsuc:2
   }
   )

   }

   else (alert("pls sign up"))

   }

  renderRedirect = () => {
   if (this.state.logsuc===1) {
     return <Redirect to="/Map" />
   }else if(this.state.logsuc ===2){
     return <Redirect to = {{
       pathname:"/Mechtasks",
       state:{tasks:this.state.tasks}
     }}/>
   }
 }

   render() {
     return (



       <div>
             <form  onSubmit={this.handleSubmit}>
               {this.renderRedirect()}
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