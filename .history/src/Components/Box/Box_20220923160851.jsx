import React from "react";

import "./Styles.css";
const Box = (props) => {
  return (
    <div className="box-prime">
      <div className="box">
        <h2>{props.name}</h2>
        <div>
          <h2>{props.text}</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Box;
