var Piece = require('./piece.js');

function Advisor(color) {
  var self = new Piece(color);

  return self;
}

module.exports = Advisor;
