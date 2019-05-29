import {NavLink } from "react-router-dom";
import React from 'react';

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
      handleSubmit(event) {
        event.preventDefault();
      
        alert(`You chose the ${this.state.choice} `);
      //  path="/SignupMain"
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
          <form action="/" onSubmit={this.handleSubmit.bind(this)}>
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
           
            
           
        
          </form>
        );
      }
  
  }

  export default SignupMain;