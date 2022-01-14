import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import DrawService from "../service/drawService";
import Board from "../service/board";
import "./canvas.css";

const Canvas = (props) => {
  var lines = 2;
  if (props.lines) {
    lines = props.lines;
  }
  const canvasRef = useRef(null);

  let drawService;

  const onClickHandler = (event) => {
    var canvasMousePosition = drawService.getCanvasMousePosition(event);
    drawService.addPlayingPiece(canvasMousePosition);
    drawService.drawLines(10);
  };

  useEffect(() => {
    const draw = () => {
      try {
        drawService = new DrawService(canvasRef, lines);
      } catch (error) {
        alert(error);
      }
    };

    draw();
  }, [lines]);

  return (
    <canvas
      id="tic-tac-toe-board"
      ref={canvasRef}
      className="center-v"
      onClick={onClickHandler}
    ></canvas>
  );
};

export default Canvas;
