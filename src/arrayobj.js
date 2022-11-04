import React, { Component } from "react";
class Arrayobj extends Component {
  constructor(props) {
    super(props);
    this.array = [
      {
        a: "name",
        b: 1
      },
      {
        a: "name",
        b: 2
      },
      {
        a: "name",
        b: 3
      }
    ];
  }
  //  handleclick=()=>{
  //   return(

  //   );
  // }

  render() {
    return (
      <div>
        <p>Click button to display</p>
        <button
          onClick={() => {
            return <p>this is inner</p>;
          }}
        >
          click
        </button>
      </div>
    );
  }
}
export default Arrayobj;
