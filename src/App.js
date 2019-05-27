import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'

class App extends React.Component {
  constructor(props) {
    super(props);
                        }

  render() {
    return (
     <div>
       <Map />
     </div>
    );
  }

}


export default App;
