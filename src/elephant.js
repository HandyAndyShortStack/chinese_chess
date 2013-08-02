var Piece = require('./piece.js');

function Elephant(color) {
  var self = new Piece(color);

  return self;
}

module.exports = Elephant;
