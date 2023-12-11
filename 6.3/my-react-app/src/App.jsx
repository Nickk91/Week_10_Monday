import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { render } from "react-dom";
import InceDec from "./components/InceDec";

function App() {
  return <InceDec />;
}

// let color = "black";
// const [count, setCount] = useState(0);

// function handleClick(amount) {
//   setCount((count) => count + amount);
// }

// if (count === 0) {
//   color = "black";
// } else if (count > 0) {
//   color = "green";
// } else {
//   color = "red";
// }

// return (
//   <>
//     <div className="container">
//       <button onClick={() => handleClick(1)}>Increase</button>
//       <button onClick={() => handleClick(-1)}>Decrease</button>
//       <span className={color}>{count}</span>
//     </div>
//   </>
// );

export default App;
