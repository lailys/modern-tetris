import shortid from "shortid";
import { useContext } from "react";
import { TetrisContext } from "../provider/provider";
import "./shapeContainer.css";
import BoardSquare from "../square/boardSquare";

function ShapeContainer() {
  const context = useContext(TetrisContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  return (
    <div className="shape-container">
      {context.shapesMap[`${context.shape}-${context.rotation}`].map((r) =>
        r.map((s) => (
          <div key={shortid.generate()}>
            <BoardSquare color={s === 1 ? context.shape : null} isView={true} />
          </div>
        ))
      )}
    </div>
  );
}

export default ShapeContainer;
