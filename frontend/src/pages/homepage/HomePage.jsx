import React, { Component } from 'react';
import { connect } from 'react-redux'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
    

        return(
            <div className="container">
                <h3 className="center">1up Health</h3>
                <div className="box">
                   hello home page!
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)