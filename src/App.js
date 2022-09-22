import { TetrisContextComp } from "./provider/provider";
import "./App.css";
import GameContainer from "./gameContainer/gameContainer";
import ShapeContainer from "./shapeContainer/shapeContainer";

function App() {
  return (
    <TetrisContextComp>
      <div className="App">
        <GameContainer />
        <ShapeContainer />
      </div>
    </TetrisContextComp>
  );
}

export default App;
