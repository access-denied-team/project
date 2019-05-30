import App from '../App.js'
import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
class Accept extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show:false
		}
	}
	
	checkstatus(){
		if(this.state.show){
		 return <Redirect to="/Rating" />}
		  
		};
	   
		time(){
		  var that =this
			setTimeout(()=>{
			  that.setState({
				show:true
			  })
			},0)
		}


	classes(theme){
		return {
			card: {
				maxWidth: 345,
			  },
			  media: {
				height: 140,
			  }
		}
	  }

	render(){
		var that = this;
		return (
			<div>
			
				<h1 style={{"textalign": "center"}}>Efz3li</h1>
				<Container>
						<Card className={that.classes.card}>
      			<CardActionArea>
       	 <CardMedia
          className={that.classes.media}
		  image={that.props.mechinfo.imgUrl}
		  style={{height:"140px",width:"150px"}}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
					{this.props.mechinfo.userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong style={{color:"black"}}>{this.props.mechinfo.username} is on his/her way!</strong> 
		<strong style={{color:"black"}}> You can reach him/her on {this.props.mechinfo.phonenumber}</strong>	
          </Typography>
		 <div>
      
     
    </div>
        </CardContent>
      </CardActionArea>
	  <CardActions><Button onClick={that.time.bind(that)} size="small" color="primary">
         Complete
        </Button></CardActions>
			</Card>
			</Container>
	<br></br>
	{that.checkstatus()}
	</div>
		)}		
	}

export default Accept;

