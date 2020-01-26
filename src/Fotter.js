import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     

      style2: {
      
      
       
        position: "relative",
        bottom: 0,
        left: "450px",
        color: "black",
      
      }
    };
  }

  render() {
    return (
      <div >
        <h1 style={this.state.style2}>Copy Right Reserved @2020</h1>
      </div>
    );
  }
}
export default Footer;
