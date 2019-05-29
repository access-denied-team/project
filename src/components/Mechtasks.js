 import App from '../App.js'
 import React, { Component }  from 'react';

class Mechtasks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}




	render(){
		var that = this;
		return (
			<div>
				{this.props.location.state.tasks.map(function(item){
					return<div> 
						NewTasks
						<ul>	
							<img src={item.imgUrl} height="100" width="100"/>
							<li>userName: {item.username}</li>
							<li>phoneNumber: {item.phonenumber}</li>
							<li>location: {item.location}</li>
						</ul>
						<button onClick={that.props.update}>Accept</button>
						<button>Decline</button>

							</div>
							
							
				})}	

			</div>
			)
	}
}
export default Mechtasks;