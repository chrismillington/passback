import React, { useState } from "react";
import Child from "./Child";
import "./Parent.css";

const Parent = () => {
  const [word, setWord] = useState("Parent");

  return (
    <div className="main">
      <h1>{word}</h1>
      <Child changeWord={(word) => setWord(word)} />
    </div>
  );
};

export default Parent;
