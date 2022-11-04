import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  handleclick() {
    this.setState({ num: this.state.num + 1 });
  }
  render() {
    return (
      <div>
        <p>this is counter prog</p>
        <p>count:{this.state.num}</p>
        <button onClick={this.handleclick.bind(this)}>count</button>
      </div>
    );
  }
}
export default Counter;
