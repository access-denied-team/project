import App from '../App.js'
import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

class Accept extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
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
				<h1>Efz3li</h1>
						<Card className={that.classes.card}>
      			<CardActionArea>
       	 <CardMedia
          className={that.classes.media}
		  image={that.props.mechinfo.mechImg}
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
        </CardContent>
      </CardActionArea>
			</Card>
	<br></br>
	</div>
		)}		
	}

export default Accept;

