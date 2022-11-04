import React, { Component } from "react";
class Countertext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      color: ""
    };
  }
  handleclick(e) {
    if (e.target.id === "red") {
      this.setState({ color: "red" });
      console.log("redddd");
    }
    if (e.target.id === "yellow") {
      this.setState({ color: "yellow" });
      console.log("yellow");
    }
    if (e.target.id === "blue") {
      this.setState({ color: "blue" });
      console.log("blue");
    }
  }
  render() {
    return (
      <div>
        <p id="para" style={{ color: this.state.color }}>
          this is counter prog
        </p>

        <button onClick={this.handleclick.bind(this)} id="red">
          Red
        </button>
        <button onClick={this.handleclick.bind(this)} id="yellow">
          yellow
        </button>
        <button onClick={this.handleclick.bind(this)} id="blue">
          blue
        </button>
      </div>
    );
  }
}
export default Countertext;
