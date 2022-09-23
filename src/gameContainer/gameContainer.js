import shortid from "shortid";
import { useContext, useEffect } from "react";
import { TetrisContext } from "../provider/provider";
import BoardSquare from "../square/boardSquare";

import "./gameContainer.css";
import SessionTimer from "../timer/sessionTimer";

function GameContainer() {
  const context = useContext(TetrisContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  useEffect(()=>{
  },[context.isChanged])
  return<>
  <div className="game-container">
    {
    context.mainBoardMap.map((r,i) =>
        r.map((s) =>{
          return (
          <div key={shortid.generate()}>
            <BoardSquare color={s[1] === 1 ? s[0] : 0} isView={false} />
          </div>
        )})
      )
}
</div>;
<div className="game-container">
{
    context.boardMap.map((r,i) =>
        r.map((s,j) => (
          <div key={shortid.generate()}>
            <BoardSquare color={s=== 1 ? context.shape : null} isView={false} />
          </div>
        ))
      )
}
</div>
<SessionTimer/>
</>
}

export default GameContainer;
