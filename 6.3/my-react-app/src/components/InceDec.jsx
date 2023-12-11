import { Component } from "react";

export default class InceDec extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease
        </button>
        <span
          className={
            this.state.count === 0
              ? "black"
              : this.state.count < 0
              ? "red"
              : "green"
          }
        >
          {this.state.count}
        </span>
      </div>
    );
  }
}

// let color = "black";
// const [count, setCount] = useState(0);

// function handleClick(amount) {
//   setCount((count) => count + amount);
// }
