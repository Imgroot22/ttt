import "./App.css";
import { useState } from "react";
import Canvas from "./components/canvas";
import CustomGame from "./components/customGame";

function App() {
  const [lines, setLine] = useState(2);
  const [toWin, setToWin] = useState(3);

  const onCreateCustom = (lines, toWin) => {
    console.log(lines, toWin);
    setLine(lines);
    setToWin(toWin);
  };

  const click = () => {
    setLine(10);
  };
  return (
    <div className="App">
      <div className="CustomGame">
        <CustomGame onCreate={onCreateCustom}></CustomGame>
      </div>
      <div className="Board">
        <Canvas lines={lines} toWin={toWin}></Canvas>
      </div>
    </div>
  );
}

export default App;
