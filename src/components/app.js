import React, { Component } from "react";
import WBT from "./wbt";
import Form from "./Form";

export default class App extends Component {
  render() {
    return (
      <div>
        <WBT />
        <Form />
      </div>
    );
  }
}
