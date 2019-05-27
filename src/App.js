import React from 'react';
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
export default App;
