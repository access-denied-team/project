import React from 'react';



class Confirm extends React.Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    sendOrder(){
        
    }

    render(){
    return(
        <button onClick={this.sendOrder()}>Help!</button>
    )
    }
}

export default Confirm