import React from "react";
import "./style.css";

function Instructions(props) {
  return <h1 className="instructions">{props.children}</h1>;
}

export default Instructions;
