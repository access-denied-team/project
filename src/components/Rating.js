
 import React, { Component }  from 'react';

import StarRatings from 'react-star-ratings';
 
class Rating extends Component {
  constructor(props){
    super(props)
    this.state={
      rating:0
    }
  }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
      console.log(this.state.rating)
    }
 
    render() {
      // rating = 2;
      return (
        <div  style={{
          marginTop:"15%",
          marginLeft:"35%"
        }}>
          <p 
          style={{fontSize:"36px",marginLeft:"-6%"}}>Please rate the Mechanic</p>
          <StarRatings
          
            rating={this.state.rating}
            starRatedColor="blue"
            changeRating={this.changeRating.bind(this)}
            numberOfStars={5}
            name='rating'
          />
        </div>
      );
    }
}
 
export default Rating;