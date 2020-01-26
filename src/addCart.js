import React, { Component } from "react";

import { connect } from "react-redux";
import Cart from "./Cart";
import Post from "./Post";
import EmptyCart from "./EmptyCart";

class CartComponent extends Component {
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <h1>The Cart </h1>

        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.cart ? <Cart post={post} key={post.id} /> : <EmptyCart />}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.posted)
  return {
    posts: state.posted
  };
};
export default connect(mapStateToProps)(CartComponent);
