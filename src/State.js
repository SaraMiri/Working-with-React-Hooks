import React,  { useState } from "react"

const StateComponent = () => {
  const [isGreen, setIsgreen] = useState(true);

  return ( <h1 onClick={() => setIsgreen(!isGreen)}
  style={{color: isGreen ? "limeGreen" : "crimson"}}>useState Example</h1>);
};

export default StateComponent;

