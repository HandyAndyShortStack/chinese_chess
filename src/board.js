var Square = require('./square.js');

function Board() {
  for (var x = 0; x < 9; x += 1) {
    for (var y = 0; y < 10; y += 1) {
      var coordinates = x + ',' + y;
      var square = new Square(x, y);
      this[coordinates] = square;
      var leftSquare = this[(x - 1) + ',' + y];
      var downSquare = this[x + ',' + (y - 1)];
      if (leftSquare) { square.left = leftSquare; leftSquare.right = square; }
      if (downSquare) { square.down = downSquare; downSquare.up = square }
    }
  }
}

module.exports = Board;
