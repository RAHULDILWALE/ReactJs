import React, { Component } from "react";

import { connect } from "react-redux";

class DisplayCart extends Component {
  render() {
   // console.log(this.props.cart);
    return (
      <div >
        <table
          class="table table-bordered"
        
        >
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </thead>
        
        <tbody>
          {this.props.cart.map(cart => (
            <tr>
              <td key={cart.id}>{cart.id}</td>
              <td>{cart.title}</td>
              <td>{cart.author}</td>
              <td><button type="Submit" className="btn btn-primary"  onClick={()=>this.props.dispatch({type:'Remove_From_Cart',id :cart.id})}>Remove Post </button></td>

            </tr>
          ))}
        </tbody>

        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("cart state " + state);
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps)(DisplayCart);
