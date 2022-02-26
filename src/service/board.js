const defaultValue = "";

class Board {
  #board;
  #size;
  constructor(size) {
    if (size >= 2 && size <= 11) {
      this.#size = size;
      this.#board = [];
      for (var x = 0; x < this.#size; x++) {
        this.#board.push([]);

        for (var y = 0; y < this.#size; y++) {
          this.#board[x].push(defaultValue);
        }
      }
    } else {
      throw "invalid size";
    }
    this.MadeMove.bind(this);
  }
  getBoard() {
    return this.#board;
  }
  resetBoard() {
    this.board = [];
    for (var x = 0; x < this.size; x++) {
      this.board.push([]);

      for (var y = 0; y < this.size; y++) {
        this.board[x].push(defaultValue);
      }
    }
  }
  getSize() {
    return this.#size;
  }

  MadeMove(player, x, y) {
    this.#board[y][x] = player;
  }
  isValidMove(x, y) {
    return this.#board[y][x] === defaultValue;
  }
  generateRandomMove() {
    let values = {
      x: Math.floor(Math.random() * this.#size),
      y: Math.floor(Math.random() * this.#size),
    };
    let count = 0;
    while (
      !this.isValidMove(values.x, values.y) &&
      count++ < this.#size * this.#size
    ) {
      console.log(values);
      values = {
        x: Math.floor(Math.random() * this.#size),
        y: Math.floor(Math.random() * this.#size),
      };
    }
    return values;
  }
}

export default Board;
