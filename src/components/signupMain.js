
import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Userform from './Userform';
// import Mechanicform from './Mechanicform';

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
      }

    render() {
        return (
          <form  onSubmit={this.handleSubmit.bind(this)}>
           { this.renderRedirect()}
            <p>user or mechanist:</p>
            
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
           

           
           
          </form>
        );
      }
  
  }

  export default SignupMain;