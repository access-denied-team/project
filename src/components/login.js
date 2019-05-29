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

const useStyles = makeStyles(theme => ({
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
}));

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
 logsuc:0
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(event) {
      event.preventDefault();
   var match=false;
   console.log(event.target[0].value)
   console.log(this.props.loginDb[1].username)
    for(var i=0;i<this.props.loginDb.length;i++){
      if(this.props.loginDb[i].username === event.target[0].value && this.props.loginDb[i].password===event.target[1].value){
         match =true;
         var role=this.props.loginDb[i].Role;
      }
      }
    
    if (match && role==="user"){
    alert("welcome user")
    this.setState({
 logsuc:1
    },function(){
      alert(this.state.logsuc)
    })

   }
    else if(match && role==="mechanical"){
      this.setState({
 logsuc:2
    },function(){
      alert(this.state.logsuc)
    })

    }
     
    else (alert("pls sign up"))
    
    }

   renderRedirect = () => {
    if (this.state.logsuc===1) {
      return <Redirect to="/Map" />
    }else if(this.state.logsuc ===2){
      return <Redirect to = {{
        pathname:"/Mechtasks",
        props:{tasks:this.props.tasks}
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
              <form  onSubmit={this.handleSubmit}>
                {this.renderRedirect()}
              <input type="text"  placeholder=" username"/> <br />
              <input type="password"  placeholder="password"/> <br />        
                <button>login</button> <br/>
              <br/> <a href="SignupMain">  Signup </a>
          </form>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={this.classes.paper}>
        <Avatar className={this.classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={this.classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
        </div>     
      )
    }
  
  }

  export default Login