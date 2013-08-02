var Piece = require('./piece.js');

function General(color) {
  var self = new Piece(color);

  return self;
}

module.exports = General;
