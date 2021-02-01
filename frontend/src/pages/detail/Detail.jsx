import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addToCart } from '../../reducers/cartActions';
 class Home extends Component{
    
    // handleClick = (id)=>{
    //     this.props.addToCart(id); 
    // }

    // componentDidMount() {
    //     // const user = await authenticate(req, res);
    //     const user='hello world';
  
    //   let dashboard = await fetch(`http://localhost:3000/api/dashboard`, {
    //     credentials: 'include',
    //   }).then(r => r.json());
    //   console.log('this is ressss',user);
    //   return { dashboard, user };
   
    //   }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            {/* <span to="/detail" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span> */}
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Details</h3>
                <div className="box">
                    {itemList}
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
        // addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)