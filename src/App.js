import React from 'react';
import Login from './components/login';
import SignupMain from './components/signupMain';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mechtasks from './components/Mechtasks';
import Mapview from './components/Map'
import AcceptComponent from './components/AcceptComponent.js';
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';
import Rating from './components/Rating';
import { Redirect } from 'react-router-dom'




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
        imgUrl: "data:image/jpeg;base64,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"
      },
      {
        username: 'Oday',
        phonenumber: '03548094',
        location: "Irbid",
        imgUrl: 'https://media.licdn.com/dms/image/C5603AQFJzw59sztVNw/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=nTJREN9eTEGUBVQOZgmmExlbZZ3CsQBK4s5KkdDudrk'
      }
    ],
  mechinfo:{}
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
    // }
    // )


  

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
         
    <Route exact path="/" render={(props)=> <Login loginDb={this.state.loginDb} tasks={this.state.tasks}  logsuc={0}
    />}/> 
         
         <Route exact path="/Mechtasks" render={(props)=> <Mechtasks {...props} addMech={this.addMech.bind(this)} status={this.state.status} update={this.update.bind(this)} complete={this.complete.bind(this)}/>}/>

         <Route exact path="/MechanicForm" render={(props)=> <MechanicForm addUser={this.addUser.bind(this)}/>}/>
 

         <Route exact path="/MechanicForm" render={(props)=> <MechanicForm addUser={this.addUser.bind(this)}/>}/>
         <Route exact path="/Rating" component={Rating} />
         <Route exact path="/AcceptComponent" component={AcceptComponent} />

         <Route exact path="/SignupMain" component={SignupMain} />
         <Route exact path="/UserForm" render={(props)=> <UserForm addUser={this.addUser.bind(this)}
    />}/>
    <Route exact path="/accept" render={(props)=> <Accept mechinfo={this.state.mechinfo}/>}/>
       
         <Route
  path='/map'
  render={(props) => <Mapview {...props}  addTask={this.addTask.bind(this)} Status={this.state.status} />}
/>
     </Router>
     
     </div>  
    );
  }
  }
export default App;
