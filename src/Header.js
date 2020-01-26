import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style1: {
        backgroundColor: "black",
        height: "50px",

        color: "black"
      },

      style2: {
        marginleft: "800px",
        float: "center"
      }
    };
  }

  render() {
    return (
      <div style={this.state.style1}>
        <h1 style={this.state.style2}>Ekart</h1>
      </div>
    );
  }
}
export default Header;
