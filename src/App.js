import React from 'react';
import Login from './components/login';
import SignupMain from './components/signupMain';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Mechtasks from './components/Mechtasks';
import Mapview from './components/Map'
import Accept from './components/AcceptComponent';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';
import AcceptComponent from './components/AcceptComponent.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
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
        location:"Irbid",
        imgUrl:"https://qph.fs.quoracdn.net/main-qimg-e25e3a9935aaef59599f171604318771"
      },
      {
        username:"lama",
        phonenumber:"0899933",
        location:"Amman",
        imgUrl:"https://i2.wp.com/viscawedding.com/wp-content/uploads/2019/01/Cute-Women-T-Shirt-Ideas-You-Can-Try-32.jpg?w=284&h=427&ssl=1"
      },
      {
        username: "Yasser",
        phonenumber: "01829393",
        location: 'Amman',
        imgUrl: ""
      },
      {
        username: 'Oday',
        phonenumber: '03548094',
        location: "Irbid",
        imgUrl: 'https://media.licdn.com/dms/image/C5603AQFJzw59sztVNw/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=nTJREN9eTEGUBVQOZgmmExlbZZ3CsQBK4s5KkdDudrk'
      }
    ],
  mechinfo:{
    username: 'Eyad',
    phonenumber: '09920194',
    location: 'Amman',
    imgUrl: 'https://cdn.trade-schools.net/static/graphics/auto-mechanic-top.jpg',
  } 
    };
    // this.addTask.bind(this)
  }

addTask(task){
  console.log(task)
  this.setState({
    tasks:[...this.state.tasks,task]
    
  }, function(){
    console.log(this.state.tasks)
  })
}

  handleclick (){
    //alert("hello")
     //alert("status is " +this.state.status)
    // this.setState({
    //   status:"bending ..."
     if(this.state.status===null){
       return true;
      // alert("waiting");
     }
     }

    //  getMechInfo(){
    //    console.log(this.state.mechinfo)
    //     return this.state.mechinfo;
    //  }

update(){
  
  this.setState({
    status:"waiting"
  })
}

complete(){
  
  this.setState({
    status:"completed"
  })
}

complete(){
  alert('hello completed')
  this.setState({
    status:"completed"
  },()=>console.log(this.state.status))
}

addUser(user){
  this.setState({
    loginDb:[...this.state.loginDb,user]
  })
}
addMech(mech){
this.setState({
  mechinfo:mech
},()=>console.log(this.state.mechinfo))

}

  render() {
    return (
      <div>
      <Router>   
        <Route exact path="/" render={(props)=> <Login loginDb={this.state.loginDb} tasks={this.state.tasks}  logsuc={0}/>}/>         
         <Route exact path="/Mechtasks" render={(props)=> <Mechtasks {...props} addMech={this.addMech.bind(this)} 
         status= {this.state.status} update={this.update.bind(this)} complete={this.complete.bind(this)}/>}/>
         <Route exact path="/MechanicForm" render={(props)=> <MechanicForm addUser={this.addUser.bind(this)}/>}/>
         <Route exact path="/SignupMain" component={SignupMain} />
         <Route exact path="/UserForm" render={(props)=> <UserForm addUser={this.addUser.bind(this)}/>}/>
         <Route exact path="/Accept" render={(props)=> <Accept {...props} mechinfo={this.state.mechinfo}/>}/>
         <Route path='/map' render={(props) => <Mapview {...props}  addTask={this.addTask.bind(this)} Status={this.state.status} />}/>
     </Router>
     </div>  
    );
  }
  }
export default App;
