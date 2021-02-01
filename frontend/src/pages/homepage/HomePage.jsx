import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../reducers/cartActions'

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
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)