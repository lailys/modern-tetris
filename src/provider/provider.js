import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";

import {
  createBoard,
  randomShape,
  randomRotation,
  getStartPostion,
} from "../utils/index";

export const TetrisContext = React.createContext();

export const TetrisContextProvider = TetrisContext.Provider;
export const TetrisContextConsumer = TetrisContext.Consumer;

export const TetrisContextComp = ({ children }) => {
  const [mainBoardMap, setMainBoardMap] = useState(createBoard);
  const [rotation, setRotation] = useState(randomRotation);
  const [shape, setShape] = useState(randomShape);
  const [pos, setPos] = useState(getStartPostion);
  const [moving, setMoving] = useState(false);
  const [key, setKey] = useState("");
  const [score, setScore] = useState(0);
  const [isChanged, setIsChanged] = useState(false);
  let boardMap = createBoard();
  let lastPos = [];
  const shapesMap = {
    "i-0": [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    "i-90": [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    "i-180": [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    "i-360": [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
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
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 1],
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
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    "o-90": [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    "o-180": [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    "o-360": [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
  };
  useEffect(() => {
    if (pos[0] >= 24) {
      //   stopMovingForward();
      update(shape);
      setMoving(false);
      setShape(randomShape);
      setRotation(randomRotation);
      setPos(getStartPostion);
      setMoving(true);
    }
  }, [pos]);
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        setKey(event.code);
        setMoving(true);
      }
      if (event.code === "Space") {
        event.preventDefault();
        setKey(event.code);
        setMoving(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  const stopMovingForward = () => {
    setMoving(false);
    setShape(randomShape);
    setRotation(randomRotation);
    setPos(getStartPostion);
    setMoving(true);
  };
  const update = (shape) => {
    const currBoard = [...mainBoardMap];
    for (let [x, y] of lastPos) {
      currBoard[x][y] = [shape, 1];
    }
    setIsChanged(!isChanged);
    setMainBoardMap(currBoard);
    // lastPos = [];
  };
  const start = () => {
    let nextPos = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (shapesMap[`${shape}-${rotation}`][i][j] === 1) {
          nextPos.push([i + pos[0], j + pos[1]]);
        }
      }
    }
    availableMove(nextPos);
  };

  const availableMove = (next) => {
    let isAvailable = true;
    for (let [x, y] of next) {
      if (mainBoardMap[x][y][1] === 1) {
        alert("yessss", [x, y], mainBoardMap[x][y][1]);
        isAvailable = false;
        break;
      }
    }
    if (isAvailable) {
      lastPos = next;
      for (let [x, y] of lastPos) {
        boardMap[x][y] = 1;
      }
    } else {
      update(shape);
      setMoving(false);
      //   setShape(randomShape);
      //   setRotation(randomRotation);
      //   setPos(getStartPostion);
      //   setMoving(true);
    }
  };
  const move = () => {
    setPos(([x, y]) => [x + 1, y]);
    start();
  };
  start();
  return (
    <TetrisContextProvider
      value={{
        key,
        boardMap,
        mainBoardMap,
        shapesMap,
        isChanged,
        move,
        start,
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
