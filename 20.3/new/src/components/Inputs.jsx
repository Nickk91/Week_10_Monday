import React, { Component } from "react";

export default class Inputs extends Component {
  constructor() {
    super();
    this.state = {
      timer: [{ x: 360 }, { x: 60 }, { x: 1 }],
    };
  }

  handleInput = (i, event) => {
    const { value } = event.target;

    this.setState((prevState) => {
      const newTimers = [...prevState.timer];
      newTimers[i] = { x: parseInt(value, 10) || 0 };
      return { timer: newTimers };
    });
  };

  render() {
    return this.state.timer.map((obj, i) => {
      return (
        <div key={i}>
          <label htmlFor="quantity">{`Timer ${i + 1}`}</label>
          <input
            type="number"
            id={`quantity${i}`}
            name={`quantity${i}`}
            value={obj.x}
            onInput={(event) => this.handleInput(i, event)}
          ></input>
        </div>
      );
    });
  }
}
