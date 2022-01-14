import Board from "./board";

class DrawService {
  constructor(canvasRef, lines) {
    this.lines = lines;
    this.player = 1;
    this.lineColor = "#ddd";
    this.canvasSize = 600;
    this.sectionSize = this.canvasSize / (lines + 1);
    this.canvas = canvasRef.current;
    this.context = this.canvas.getContext("2d");
    this.canvas.width = this.canvasSize;
    this.canvas.height = this.canvasSize;
    this.context.translate(0.5, 0.5);
    this.board = new Board(this.lines + 1);
    this.drawLines(10);
  }

  drawLines = (lineWidth) => {
    var lineStart = 4;
    var lineLenght = this.canvasSize - (this.lines + 3);
    this.context.lineWidth = lineWidth;
    this.context.lineCap = "round";
    this.context.strokeStyle = this.lineColor;
    this.context.beginPath();

    /*
     * Horizontal lines
     */
    for (var y = 1; y <= this.lines; y++) {
      this.context.moveTo(lineStart, y * this.sectionSize);
      this.context.lineTo(lineLenght, y * this.sectionSize);
    }

    /*
     * Vertical lines
     */
    for (var x = 1; x <= this.lines; x++) {
      this.context.moveTo(x * this.sectionSize, lineStart);
      this.context.lineTo(x * this.sectionSize, lineLenght);
    }
    this.context.stroke();
  };
  drawO = (xCordinate, yCordinate) => {
    var halfSectionSize = 0.5 * this.sectionSize;
    var centerX = xCordinate + halfSectionSize;
    var centerY = yCordinate + halfSectionSize;
    var radius = halfSectionSize / 2;
    var startAngle = 0 * Math.PI;
    var endAngle = 2 * Math.PI;

    this.context.lineWidth = 13 - this.lines;
    this.context.strokeStyle = "#01bBC2";
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, startAngle, endAngle);
    this.context.stroke();
  };

  drawX = (xCordinate, yCordinate) => {
    this.context.strokeStyle = "#f1be32";
    this.context.lineWidth = 13 - this.lines;
    this.context.beginPath();

    var offset = this.sectionSize * 0.75;
    this.context.moveTo(xCordinate + offset, yCordinate + offset);
    this.context.lineTo(
      xCordinate + this.sectionSize - offset,
      yCordinate + this.sectionSize - offset
    );

    this.context.moveTo(
      xCordinate + offset,
      yCordinate + this.sectionSize - offset
    );
    this.context.lineTo(
      xCordinate + this.sectionSize - offset,
      yCordinate + offset
    );

    this.context.stroke();
  };

  addPlayingPiece = (mouse) => {
    var xCordinate;
    var yCordinate;

    for (var x = 0; x < this.lines + 1; x++) {
      for (var y = 0; y < this.lines + 1; y++) {
        xCordinate = x * this.sectionSize;
        yCordinate = y * this.sectionSize;

        if (
          mouse.x >= xCordinate &&
          mouse.x <= xCordinate + this.sectionSize &&
          mouse.y >= yCordinate &&
          mouse.y <= yCordinate + this.sectionSize &&
          this.board.isValidMove(x, y)
        ) {
          if (this.player === 1) {
            this.drawX(xCordinate, yCordinate);
            this.board.MadeMove(1, x, y);
          } else {
            this.drawO(xCordinate, yCordinate);
            this.board.MadeMove(2, x, y);
          }
          if (this.player === 1) {
            this.player = 2;
          } else {
            this.player = 1;
          }
        }
      }
    }
  };
  getCanvasMousePosition = (event) => {
    var rect = this.canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };
}
export default DrawService;
