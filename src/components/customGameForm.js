import "./customGameForm.css";
import { useState } from "react";

const CustomGameForm = (props) => {
  const [size, setSize] = useState(3);
  const [toWin, setToWin] = useState(3);
  let maxToWin = 2;
  const onSizeChangeHandler = (event) => {
    setSize(event.target.value);
  };
  const onToWinChangeHandler = (event) => {
    setToWin(event.target.value);
  };
  const onSubmitHand = (event) => {
    event.preventDefault();
    props.onCreate(size - 1, +toWin);
  };
  return (
    <form onSubmit={onSubmitHand}>
      <label htmlFor="size" className="basic-style">
        Enter The Size
      </label>
      <input
        type="number"
        id="size"
        className="size basic-style"
        placeholder="SIZE ( N * N )"
        value={size}
        onChange={onSizeChangeHandler}
        required
        min="3"
        max="11"
      />
      <label htmlFor="toWin" className="basic-style">
        Enter To Win
      </label>
      <input
        type="number"
        id="toWin"
        className="toWin basic-style"
        placeholder="To Win"
        value={toWin}
        onChange={onToWinChangeHandler}
        required
        min="2"
        max={size}
      />
      <button className="btn-create">Create</button>
      <button onClick={props.onClose} className="btn-close">
        Close
      </button>
    </form>
  );
};
export default CustomGameForm;
