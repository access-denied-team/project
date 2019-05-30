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

class Mechtasks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}


	
	  addMech(){
		  let mech=this.props.location.state.user
		  this.props.addMech(mech)
		  this.props.update()
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

			<div style={{marginTop:"4%"}}>
				{that.props.location.state.tasks.map(function(item){
					return(<div><Card className={that.classes.card}>
      <CardActionArea>
        <CardMedia
          className={that.classes.media}
		  image={item.imgUrl}
		  style={{height:"140px",width:"150px"}}
        />


		
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
		  {item.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong style={{color:"black"}}>{item.username} wants your help!</strong> 
		<strong style={{color:"black"}}>Please contact him/her soon {item.phonenumber}</strong>	
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={that.addMech.bind(that)} size="small" color="primary">
         Accept
        </Button>
        <Button onClick={that.props.complete} size="small" color="primary">
          Completed
        </Button>
      </CardActions>
	</Card>
	<br></br>
	</div>
	)})}
	</div>
			)
	}
}
export default Mechtasks;