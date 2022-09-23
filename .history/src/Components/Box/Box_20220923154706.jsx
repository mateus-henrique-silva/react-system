import React from "react";
import Text from "../Text/Text";
import "./Styles.css";
const Box = (props) => {
  return (
    <div className="box-prime">
      <div className="box">
        <h2>{props.name}</h2>
        <div>
          <p>{props.text}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Box;
