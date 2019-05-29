import {NavLink } from "react-router-dom";
import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class SignupMain extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      choice:""
      };
    }
    handleChange(event) {
        this.setState({
          choice: event.target.value
        });
      }
      handleSubmit(event) {
        event.preventDefault();
      
        alert(`You chose the ${this.state.choice} `);
      //  path="/SignupMain"
      }
      renderRedirect = () => {
        if (this.state.choice==="mechanist") {
          return <Redirect to="/MechanicForm" />
        }else if(this.state.choice==="user"){
          return <Redirect to="/UserForm" />
        }
    }

    classes(theme){
      return {
        '@global': {
          body: {
            backgroundColor: theme.palette.common.white,
          },
        },
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }
    }

    render() {
        return (
          <div className={this.classes.root}>
             <form action="/" onSubmit={this.handleSubmit.bind(this)}>
             {this.renderRedirect()}
      <FormControl component="fieldset" className={this.classes.formControl}>
        <FormLabel component="legend">Choose Your Profession</FormLabel>
        <RadioGroup>
          <FormControlLabel value="user" control={<Radio />} type="radio"  label="User"  checked={this.state.choice === "user"}     onChange={this.handleChange.bind(this)}/>
          <FormControlLabel value="mechanist" control={<Radio />} type="radio" label="Mechanic" checked={this.state.choice === "mechanist"} onChange={this.handleChange.bind(this)}/>
        </RadioGroup>     
      </FormControl>
      </form>
    </div>
        );
      }
  
  }

  export default SignupMain;