import React from "react";
import "./Parent.css";
import { useState } from "react";

const Child = (props) => {
  const [text, setText] = useState("Random");

  return (
    <div className="Child">
      <h2>Child</h2>
      <button onClick={() => props.changeWord(text)}>Hit me </button>
      <input
        type="text"
        id="sprog"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Child;
