import React from 'react';

import './App.css';
import Map from './components/Map'
import UserForm from './components/UserForm';
import MechanicForm from './components/MechanicForm';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Map/> */}
      <UserForm />
      <MechanicForm/>
      </div>
    );
  }
}


export default App;
