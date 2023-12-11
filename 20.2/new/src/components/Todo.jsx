import React, { Component } from "react";
import "./to.css";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
  }

  handleClick = (i) => {
    const newState = this.state.todo.map((todo, index) => {
      return index === i ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({ todo: newState });
  };

  render() {
    return this.state.todo.map((obj, i) => {
      return (
        <div key={i}>
          <div className="container">
            <h1 className={obj.completed ? "true" : ""}>{obj.name}</h1>
            <span onClick={() => this.handleClick(i)}>
              {obj.completed ? "✓" : "X"}
            </span>
          </div>
        </div>
      );
    });
  }
}
