import { useEffect, useRef, useState, Fragment } from "react";
import { useContext } from "react";
import { TetrisContext } from "../provider/provider";

function SessionTimer() {
  const context = useContext(TetrisContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [timer, setTimer] = useState(0); // 25 minutes
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef();

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (context.moving) {
      tick.current = setInterval(() => {
        context.move();
        setTimer((timer) => timer + 1);
      }, 100);
    } else {
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [context.moving]);
  return <Fragment />;
}

export default SessionTimer;
