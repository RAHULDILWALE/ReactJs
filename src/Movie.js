import React, { Component } from "react";

export default class  extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state.username);
    alert(
      "A name was submitted:   " +
        this.state.username +
        "  Password was   " +
        this.state.password
    );
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ "text-align": "center", color: "black",'margin-left' : '500px','margin-right' : '500px','margin-top':'100px'}}>
        <h1 style={{ "text-align": "center", color: "black" }}>Login</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.username}
            onChange={event => this.handleChange(event)}
            placeholder="Enter User Name"
          />
          <br></br>
          <input
            type="text"
            value={this.state.password}
            onChange={event => this.handlePasswordChange(event)}
            placeholder="Enter Password"
          />
          <br></br>


          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
