import React from 'react';

import Login from './components/login';
import SignupMain from './components/signupMain';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mechtasks from './components/Mechtasks';

import Mapview from './components/Map'

import Accept from './components/AcceptComponent.js';
import Foo from './components/Rating.js';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';
import Rating from './components/Rating';




class App extends React.Component {
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
        phonenumber:"0893284",
        location:"irbid",
        imgUrl:"https://qph.fs.quoracdn.net/main-qimg-e25e3a9935aaef59599f171604318771"
      },
      {
        username:"lama",
        phonenumber:"0899933",
        location:"Amman",
        imgUrl:"https://i2.wp.com/viscawedding.com/wp-content/uploads/2019/01/Cute-Women-T-Shirt-Ideas-You-Can-Try-32.jpg?w=284&h=427&ssl=1"
      }
    ]
  
      // mechinfo:{ 
      //    userName:"oday ismail abueid",
      //    phoneNum:"78090332",
      //    mechImg:"https://thumbs.dreamstime.com/z/mechanical-engineer-29186038.jpg"
      // }
    };

    this.addTask.bind(this)
    
  }

addTask(task){
  this.setState({
    tasks:[...this.state.tasks,task]
  })
}

    


  render() {
    return (
                
      // <div>
      //      <Login/>
      // </div>
      
       <Router>
         
    <Route exact path="/" render={(props)=> <Login loginDb={this.state.loginDb} tasks={this.state.tasks}  logsuc={0}
    />}/> 
         <Route exact path="/Login" component={Login} />
         <Route exact path="/MechanicForm" component={MechanicForm} />
        <Route exact path="/Mechtasks" component={Mechtasks} />

        <Route exact path="/UserForm" component={UserForm} />

         <Route exact path="/SignupMain" component={SignupMain} />
         {/* <Route exact path="/map" component = {Mapview}/> */}
         <Route exact path="/UserForm" component={UserForm}/>
       
         <Route
  path='/map'
  render={(props) => <Mapview {...props} addTask={this.addTask} />}
/>
     </Router>
            
    );
  }

  }







export default App;
