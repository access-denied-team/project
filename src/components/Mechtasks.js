import App from '../App.js'
import React, { Component }  from 'react';

class Mechtasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div>
            {this.props.location.state.tasks[0].username}

            </div>
            )
    }
}
export default Mechtasks;