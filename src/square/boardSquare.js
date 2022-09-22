import React from "react";
import "./boardSquare.css";

function BoardSquare({ color, isView }) {
  return (
    <div
      className={`${color ? color + "-square" : ""} ${
        isView ? (!color ? "" : "view-square") : "square"
      }`}
    />
  );
}

export default BoardSquare;
