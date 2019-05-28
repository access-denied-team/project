import {NavLink } from "react-router-dom";
import React from 'react';

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

    render() {
        return (
          <form action="/" onSubmit={this.handleSubmit.bind(this)}>
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
            <NavLink to="/Rating">
            
            <button type="submit" >Make your choice</button>
            </NavLink>
          </form>
        );
      }
  
  }

  export default SignupMain;