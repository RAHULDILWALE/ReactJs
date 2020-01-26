import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    if (this.props.isloggedin) {
      var template = (
        <div
          style={{
            display: "block",
            color: "pink",
            backgroundcolor: "red"
          }}
        >
          <Link to="/about">About</Link>

          <span> | </span>

          <Link to="/home">Home</Link>

          <span> | </span>

          <Link to="/contact">Contact</Link>

          <span> | </span>

          <div style={{ float: "right", height: "auto" }}>
            {" "}
            <Link to="/logout" onClick={()=>this.props.dispatch({type:'LOGOUT'})} >Logout</Link>
            <span> | </span>
          </div>

          <Link to="/add">Add Movie</Link>

          <span> | </span>

          <Link to="/table">React Table</Link>
          <span> | </span>

          <Link to="/conditional">Conditional</Link>
          <span> | </span>

          <Link to="/cart">Cart</Link>


        </div>
      );
    } else {
      template = (
        <div
          style={{
            display: "block",
            color: "pink",
            backgroundcolor: "red"
          }}
        >
          <div>
            <Link
              to="/login"
              style={{ float: "right", display: "block", "margin-top": "0px" }}
            >
              Login{" "}
            </Link>
            <span> </span>
            <span> .. </span>

            <Link
              to="/register"
              style={{ float: "right", display: "block", "margin-top": "0px" }}
            >
              Register<span>| </span>{" "}
            </Link>
          </div>
        </div>
      );
    }

    return <div>{template}</div>;
  }
}

const mapStateToProps = state => {
  console.log("login satate " + state.loggedin);
  return {
    isloggedin: state.loggedin
  };
};
export default connect(mapStateToProps)(Nav);
