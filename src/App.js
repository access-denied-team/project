import React from 'react';
import './App.css';
import Map from './components/Map'
import './App.css';
import Accept from './components/AcceptComponent.js';
import Foo from './components/Rating.js';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';


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

  }






export default App;
