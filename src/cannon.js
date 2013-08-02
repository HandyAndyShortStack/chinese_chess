var Piece = require('./piece.js');

function Cannon(color) {
  var self = new Piece(color);

  return self;
}

module.exports = Cannon;
