import React, { useState } from "react";
import Child from "./Child";
import "./Parent.css";

const Parent = () => {
  const [word, setWord] = useState();
  const [sName, setSName] = useState();
  const [language, setLanguage] = useState("");
  // https://blog.logrocket.com/guide-usestate-react/#:~:text=It%20returns%20an%20array%20with,setState%5D%20%3D%20useState(initialValue)%3B
  return (
    <div className="main">
      <h1>
        {word ? word + " " + sName + " likes " + language : "Enter a value"}
      </h1>
      {/* - ChangeWord is recieved with parameters
          - ChangeWord calls the setWord state
      */}
      <Child
        changeFirst={(word) => setWord(word)}
        changeSecond={(second) => setSName(second)}
        changeLanguage={(language) => setLanguage(language)}
      />
    </div>
  );
};

export default Parent;
