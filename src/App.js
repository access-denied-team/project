import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Accept from './components/AcceptComponent.js'
import Foo from './components/Rating.js'
/////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mechinfo:{ 
         userName:"odayabueid",
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
        </div>
        )
    }

  }
=======
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';

class App extends React.Component {
  render() {
    return (
      <div>
      <UserForm />
      <MechanicForm/>
      </div>
    );
  }
}


>>>>>>> cc54ac6f43614405f3ee0b566082d0c81a4c6bce
export default App;
