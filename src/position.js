var Board = require('./board.js');

function Position() {
  var toMove = 'red';

  function place(piece, coordinates) {
    this[coordinates] = piece;
    piece.square = this.BOARD[coordinates];
    return this;
  }

  Object.defineProperties(this, {
    toMove: {
      get: function() { return toMove; },
      set: function(color) { toMove = color; },
      enumerable: false
    },
    place: { value: place, enumerable: false }
  });
}

Position.prototype = {
  BOARD: new Board()
};

debugger;

module.exports = Position;
