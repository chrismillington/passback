import React from "react";
import "./Parent.css";
import { useState } from "react";

const Child = (props) => {
  const [fName, setfName] = useState("Christian Name");
  const [sName, setSName] = useState("Surname");
  const [radio, setRadio] = useState("");

  const update = () => {
    props.changeFirst(fName);
    props.changeSecond(sName);
    props.changeLanguage(radio);
  };
  // Help
  return (
    <div className="Child">
      <h2>Child</h2>
      <button onClick={update}>Hit me </button>
      {/* This double binds the fName state to the input */}
      <input
        type="text"
        id="fName"
        value={fName}
        onChange={(e) => setfName(e.target.value)}
      />
      <input
        type="text"
        id="sName"
        value={sName}
        onChange={(e) => setSName(e.target.value)}
      />
      <div className="radio">
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label for="html">HTML</label>
        <input
          type="radio"
          id="css"
          name="fav_language"
          value="CSS"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label for="css">CSS</label>
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label for="javascript">JavaScript</label>
      </div>
    </div>
  );
};

export default Child;
