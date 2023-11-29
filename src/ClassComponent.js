import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    this.state = {
      name: "Ameer",
      age: 27,
    };
    return (
      <div>
        <p>welcome {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>using state </p>
      </div>
    );
  }
}

export default ClassComponent;
