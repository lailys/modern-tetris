import React, { useEffect, useState } from "react";

import { createBoard, randomShape, randomRotation } from "../utils/index";

export const TetrisContext = React.createContext();

export const TetrisContextProvider = TetrisContext.Provider;
export const TetrisContextConsumer = TetrisContext.Consumer;

export const TetrisContextComp = ({ children }) => {
  const [rotation, setRotation] = useState(randomRotation);
  const [shape, setShape] = useState(randomShape);
  const [pos, setPos] = useState([0, 0]);
  const [moving, setMoving] = useState(false);
  const [score, setScore] = useState(0);
  let boardMap = createBoard();
  //   const colorMap = {
  //     o: "#ff006e",
  //     i: "#3a86ff",
  //     l: "#fb5607",
  //     c: "#00ff00",
  //     s: "#8338ec",
  //   };
  const shapesMap = {
    "i-0": [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    "i-90": [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    "i-180": [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    "i-360": [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],

    "l-0": [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    "l-90": [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    "l-180": [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    "l-360": [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],

    "c-0": [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
    ],
    "c-90": [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
    ],
    "c-180": [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    "c-360": [
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],

    "s-0": [
      [0, 1, 1],
      [0, 1, 0],
      [1, 1, 0],
    ],
    "s-90": [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    "s-180": [
      [0, 1, 1],
      [0, 1, 0],
      [1, 1, 0],
    ],
    "s-360": [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    "o-0": [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    "o-90": [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    "o-180": [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    "o-360": [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
  };

  useEffect(() => {
    console.log(boardMap, "?????");
  });

  return (
    <TetrisContextProvider
      value={{
        boardMap,
        shapesMap,
        rotation,
        setRotation,
        pos,
        setPos,
        moving,
        setMoving,
        score,
        setScore,
        shape,
        setShape,
      }}
    >
      {children}
    </TetrisContextProvider>
  );
};
