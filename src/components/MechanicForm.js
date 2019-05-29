/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import { storage } from "../firebase/index.js";
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
import { Redirect } from 'react-router-dom'


class MechanicForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            phoneNumber: '',
            location: '',
            image: null,
            imgUrl: '',
            role: 'mechanic',
            sub:0
            
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        this.selectedFile = this.selectedFile.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    inputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value,
          
        });
    }

    submitEvent(event){
      let user = {
        "username":this.state.username,
        "password":this.state.password,
        "imgUrl":this.state.imgUrl,
        "phoneNum":this.state.phoneNumber,
        "Role":"mechanical"
      }
      
        this.props.addUser(user)
        this.setState({
          sub:1
        })
        event.preventDefault();
        
        
    }

    renderRedirect = () => {
      if (this.state.sub) {
        return <Redirect to="/" />
      }
    }
    

    selectedFile(event){
        const image = event.target.files[0];
        this.setState(() => ({ image }));
    }
    
    uploadFile(){
        const { image } = this.state;
        console.log(image.name);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on("state_changed",
        snapshot => {},
        error => {
      // error function ....
      console.log(error);
    },

    () => {
      // complete function ....
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(imgUrl => {
          this.setState({imgUrl})
        });
    }
    );
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
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
    
      },
      bigAvatar: {
        margin: 10,
        width: 150,
        height: 150,
      },
    }
  }
  
  
      render(){
          return(
              <div>
                <Grid container justify="center" alignItems="center">
       
        <Avatar style={{width:"170px",height:"170px",marginTop:"2%"}} alt="Remy Sharp" src={this.state.imgUrl} className={this.classes.bigAvatar} />
      </Grid>
               <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.classes.paper}>
          
          <Typography component="h1" variant="h5">
            <Grid  item xs={12}>Sign up</Grid>
            
          </Typography>
          <form  onSubmit={this.submitEvent} className={this.classes.form} noValidate>
          {this.renderRedirect()}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
               
              </Grid>
              <Grid item xs={12} >
              <TextField
                  variant="outlined"
                  required
    
                  onChange={this.inputChange}
                  fullWidth
                  id="email"
                  label="Username"
                  name="username"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.inputChange}
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.inputChange}
                  name="phoneNumber"
                  label="Phone"
                  type="text"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
              <input type="file" onChange={this.selectedFile}/><br/>
              <input type="button" onClick={this.uploadFile} value="Upload Image " /><br/>  
              </Grid>
            </Grid>
            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
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

export default MechanicForm;