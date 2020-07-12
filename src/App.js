import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  return <div>{data.map((row, oneIndex) => {})}</div>;
}

export default App;
