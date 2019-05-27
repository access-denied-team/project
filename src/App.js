import React from 'react';
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


export default App;
