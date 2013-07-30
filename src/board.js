var Square = require('./square.js');

function Board() {

  var squares = {};
  for (var x = 0; x < 9; x += 1) {
    for (var y = 0; y < 10; y += 1) {
      var coordinates = [x, y];
      squares[coordinates] = new Square(x, y);
    }
  }

  this.findSquare = function(x, y) {
    return squares[[x, y]];
  }
}

module.exports = Board;
