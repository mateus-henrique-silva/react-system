import React from "react";
import Text from '../Text/Text'
import "./Styles.css";
const Box = () => {
  return (
    <div className="box-prime">
      <div className="box">
      <h2>{props.name}</h2>
      <div>
        <p>{props.text}</p>
        <p>{props.date}</p>
      </div>
      </div>
    </div>
  );
};

export default Box;
