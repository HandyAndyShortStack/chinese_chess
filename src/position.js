var Board = require('./board.js');

function Position() {
  var toMove = 'red';

  function place(piece, coordinates) {
    this[coordinates] = piece;
    piece.square = this.BOARD[coordinates];
    return this;
  }

  function _import(position) {
    for (var key in position) {
      this.place(position[key], key)
    }
    return this;
  }

  Object.defineProperties(this, {
    toMove: {
      get: function() { return toMove; },
      set: function(color) { toMove = color; },
      enumerable: false
    },
    place: { value: place, enumerable: false },
    'import': { value: _import, enumerable: false },
  });
}

Position.prototype = {
  BOARD: new Board()
};

module.exports = Position;
