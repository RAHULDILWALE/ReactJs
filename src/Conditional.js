import React, { Component } from "react";
class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };

    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({
      flag: !this.state.flag
    });
  }

  render() {
    return (
      <div>
        {this.state.flag && <h1>12345</h1>}
        {!this.state.flag && <h1>6789</h1>}
        <button type="Submit" onClick={this.change}>
          Conditional{" "}
        </button>
      </div>
    );
  }
}
export default Conditional;
