 import App from '../App.js'
 import React, { Component }  from 'react';

class AcceptComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		return (
			<div>
			
				<img src={this.props.mechinfo.mechImg}  height="100" width="100"/>
				<h1>MechanicalName:{this.props.mechinfo.userName}</h1>
				MecanicalNum:{this.props.mechinfo.phoneNum}
				
			</div>
			)
	}
}
export default AcceptComponent;