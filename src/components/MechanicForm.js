import React, {Component} from 'react';

class MechanicForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            phoneNumber: '',
            location: '',
            profession: '',
            imgUrl: '',
            role: 'mechanic'
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }

    inputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    submitEvent(event){
        alert('Welcome ' + this.state.usernaem);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Mechanic:</h1>
                <form onSubmit={this.submitEvent}>
                <input type="text" name="username" value={this.state.username} onChange={this.inputChange} placeholder="Username"/><br/>
                <input type="password" name="password" value={this.state.password} onChange={this.inputChange} placeholder="Password"/><br/>
                <input type ="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.inputChange} placeholder="Phone Number"/><br/>
                <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.inputChange} placeholder="Image Url"/><br/>
                <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default MechanicForm;