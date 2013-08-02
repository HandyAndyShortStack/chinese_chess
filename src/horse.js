var Piece = require('./piece.js');

function Horse(color) {
  var self = new Piece(color);

  return self;
}

module.exports = Horse;
