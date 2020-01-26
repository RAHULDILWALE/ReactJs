import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "",date : new Date(), password: "", confirmPassword: "" , location : "Select",one : true,two : false,radio1 : "veg"};
    this.handleCheckChange = this.handleCheckChange.bind(this)
    
    this.handleRadioChange = this.handleRadioChange.bind(this)

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleCheckChange(event){
    event.preventDefault()
    this.setState({[event.target.name] : event.target.checked})
  }


  handleRadioChange(event){
    this.setState({[event.target.name] : event.target.value})


  }
  handleSubmit = event => {
    console.log(JSON.stringify(this.state));
    var userType =[]
    if(event.target.checked)
    {
      console.log(event.target.name)
    }

    alert(
      "A name was submitted:   " +
        this.state.username +
        "  Password was   " +
        this.state.password +
        " ReEntered Password is " +
        this.state.confirmPassword + 
        "Location is " + this.state.location + "Type Of User is " + this.state.radio1 + " Date is " + this.state.date
    );
    event.preventDefault();
    this.setState({username: "", password: "", confirmPassword: "" , location : "Select", fruit :[]
    })
  };

  render() {
    return (
      <div >
          
        <h1 style={{ "text-align": "center", color: "black" ,"margin-left" :"-50px"}}>Register</h1>
        <form
          onSubmit={event => this.handleSubmit(event)}
          style={{
           
            "margin-left": "580px",
            "margin-top": "50px"
          }}
        >
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={event => this.handleChange(event)}
            placeholder="Enter User Name"
          />
          <br></br>
          <br></br>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={event => this.handleChange(event)}
            placeholder="Enter Password"
          />
          <br></br>
          <br></br>
          <input
            type="password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={event => this.handleChange(event)}
            placeholder="Confirm Password"
          /><br></br>
           <br></br>
          <label>
          Location 
          <select value={this.state.location} onChange={event => this.handleChange(event)} name ="location">
          <option value="Select">Select</option>

            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Jamshedpur">Jamshedpur</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </label>
          <br></br>
          <input
    onChange={event => this.handleCheckChange(event)}
    type="checkbox"
    name="one"
    value="apple" checked = {this.state.one}
  />Admin
  <br></br>
  <input
    onChange={event => this.handleCheckChange(event)}
    type="checkbox"
    name="two"
    value="orange"
    checked = {this.state.two}
  />User
  <br></br>



  <input
    onChange={event => this.handleRadioChange(event)}
    type="radio"
    name="radio1"
    value="veg" checked = {this.state.radio1 ==="veg"}
  />Veg
  <br></br>
  <input
    onChange={event => this.handleRadioChange(event)}
    type="radio"
    name="radio1"
    value="nonveg"
    checked = {this.state.radio1 ==="nonveg"}
  />Non-Veg
  <br></br>
  <input type="date" name="date" value={this.state.date} onChange={event => this.handleChange(event)}>

  </input>
  <br></br>
  <br></br>
  
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
        <Link to={`/login`} style={{ "text-align": "center", color: "black" ,"margin-left" :"580px"}}> Login</Link>

      </div>
    );
  }
}
