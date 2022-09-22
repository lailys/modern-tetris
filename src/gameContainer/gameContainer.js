import shortid from "shortid";
import { useContext } from "react";
import { TetrisContext } from "../provider/provider";
import BoardSquare from "../square/boardSquare";

import "./gameContainer.css";

function GameContainer() {
  const context = useContext(TetrisContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  return <div className="game-container">{
    context.boardMap.map((r,i) =>
        r.map((s,j) => (
          <div key={shortid.generate()}>
            <BoardSquare color={s === 1 ? context.shape : null} isView={false} />
          </div>
        ))
      )
}</div>;
}

export default GameContainer;
