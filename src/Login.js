import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isDisabled: true,
      uerr: " ",
      perr: "",
      uem: "",
      loggedin : false
    };
  }

  handleChange = e => {
    //this.setState({ username: e.target.value.toUpperCase() });

    const value = e.target.value;

    this.setState({
      username: value
    });

    console.log("uname");
    if (e.target.value === "" || e.target.value === null) {
      this.setState({
        uerr: true
      });
    } else {
      this.setState({
        uerr: false,
        username: e.target.value.toUpperCase()
      });
    }
  };
  handlePasswordChange = e => {
    const value = e.target.value;

    this.setState({
      password: value
    });

    if (e.target.value === "" || e.target.value === null) {
      this.setState({
        perr: true
      });
    } else {
      this.setState({
        perr: false,
        password: e.target.value
      });
    }

    if (this.state.uerr === false && this.state.perr === false) {
      this.setState({
        isDisabled: false
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    

    this.setState({ uem: " Username can not be empty" });

    console.log(this.state.username);
    alert(
      "A name was submitted:   " +
        this.state.username +
        "  Password was   " +
        this.state.password
    );
    this.setState({ username: "", password: "" });
    window.name1 = this.state.username;
    window.loggedin=true
    console.log(window);
  };

  render() {
    window.loggedin= !window.loggedin
    return (
      <div
        style={{
          "text-align": "center",
          color: "black",
          "margin-left": "500px",
          "margin-right": "500px",
          "margin-top": "100px"
        }}
      >
        <h1 style={{ "text-align": "center", color: "black" }}>Login</h1>
        <form
          onSubmit={event => this.handleSubmit(event)}
          style={{ "margin-top": "50px", color: "black" }}
        >
          <input
            type="text"
            value={this.state.username}
            onChange={event => this.handleChange(event)}
            placeholder="Enter User Name"
          />
          <br></br>

          <span style={{ color: "red" }}>{this.state.uem}</span>
          <br></br>
          <br></br>
          <input
            type="password"
            value={this.state.password}
            onChange={event => this.handlePasswordChange(event)}
            placeholder="Enter Password"
          />
          <br></br>
          <br></br>

          <input
            type="submit"
            value="Submit"
            class="btn btn-primary"
            style={{ "margin-left": "-13px", width: "180px" }} onClick={()=>this.props.dispatch({type:'LOGIN'})}
          />
        </form>
        <br></br>
        <Link
          to={`/forgot`}
          style={{
            "text-align": "center",
            color: "black",
            "margin-left": "-40px"
          }}
        >
          {" "}
          Forgot Password ???
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("login satate " + state.loggedin)
  return {
    posts: state.loggedin
  };
};
export default connect(mapStateToProps)(Login);

