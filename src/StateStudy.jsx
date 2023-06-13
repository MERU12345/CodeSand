import { Component } from "react";

export default class StateStudy extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "こんにちは！！！", morning: "おはよう!!" };
  }
  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <h1>{this.state.morning}</h1>
      </div>
    );
  }
}
