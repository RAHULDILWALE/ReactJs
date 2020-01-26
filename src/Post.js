import React, { Component } from 'react';

import {connect} from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
      <button
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
       Edit</button>
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
      Delete</button>

    <button 
      onClick={()=>this.props.dispatch({type:'ADD_TO_CART',id:this.props.post.id})}>
      Add To Cart</button>
    </div>
  );
 }
}
export default connect()(Post);