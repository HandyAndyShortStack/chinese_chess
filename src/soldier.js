var Piece = require('./piece.js');

function Soldier(color) {
  var self = new Piece(color);

  return self;
}

module.exports = Soldier;
