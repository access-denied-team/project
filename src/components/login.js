import React from 'react';
import SignupMain from './signupMain';
import Mechtasks from './Mechtasks';
import Map from './Map'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
 logsuc:0,
 textFieldValue:"",
 textPassValue:"",
       username:"",
        phonenumber:"",
        location:"",
        imgUrl:""

      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextFieldChange=this.handleTextFieldChange.bind(this)
    } 
    handleTextFieldChange(e){
      this.setState({
          textFieldValue: e.target.value
      })}

      handlePassFieldChange(e){
        this.setState({
            textPassValue: e.target.value
        })}

    handleSubmit(event) {
      event.preventDefault();
   var match=false;
   console.log(this.state.textFieldValue)
   console.log(this.state.PassFieldValue)
   console.log(this.props.loginDb[1].username)
    for(var i=0;i<this.props.loginDb.length;i++){
      if(this.props.loginDb[i].username === this.state.textFieldValue && this.props.loginDb[i].password===this.state.textPassValue){
         match =true;
         var role=this.props.loginDb[i].Role;
         this.setState({
           username:this.props.loginDb[i].username,
           phonenumber:this.props.loginDb[i].phoneNum,
           imgUrl:this.props.loginDb[i].imgUrl
         })
      }
      }
    
    if (match && role==="user"){
    this.setState({
 logsuc:1
    },function(){
    })

   }
    else if(match && role==="mechanical"){
      this.setState({
 logsuc:2
    },function(){
    })

    }
     
    else (alert("Please Signup!"))
    
    }

   renderRedirect = () => {
    if (this.state.logsuc===1) {
      return <Redirect to={{
        pathname:"/map",
        state:{user:{
          username:this.state.username,
          phonenumber:this.state.phonenumber,
          imgUrl:this.state.imgUrl
        }}
      }} />
    }else if(this.state.logsuc ===2){
      return <Redirect to = {{
        pathname:"/Mechtasks",
        state:{tasks:this.props.tasks}
      }}/>
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
  
        
                     
        <div>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={this.classes.paper}>
        <Avatar className={this.classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  onSubmit={this.handleSubmit} className={this.classes.form} noValidate>
        {this.renderRedirect()}
          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={this.handleTextFieldChange}
            fullWidth
            value={this.state.textFieldValue}
            id="email"
            label="Username"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={this.handlePassFieldChange.bind(this)}
            value={this.state.textPassValue}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>

            </Grid>
            <Grid item>
              <Link href="/SignupMain" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
        </div>     
      )
    }
  
  }

  export default Login