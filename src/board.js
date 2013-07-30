var Square = require('./square.js');

function Board() {

  var squares = {};
  for (var x = 0; x < 9; x += 1) {
    for (var y = 0; y < 10; y += 1) {
      var coordinates = [x, y];
      var square = new Square(x, y);
      squares[coordinates] = square;
      var leftSquare = findSquare(x - 1, y);
      var downSquare = findSquare(x, y - 1);
      if (leftSquare) { square.left = leftSquare; leftSquare.right = square; }
      if (downSquare) { square.down = downSquare; downSquare.up = square }
    }
  }

  function findSquare(x, y) {
    return squares[[x, y]];
  }

  return {
    findSquare: findSquare
  }
}

module.exports = Board;
