var Board = require('./board.js');

function Position() {
  var self = this;
  var toMove;

  function place(piece, coordinates) {
    this[coordinates] = piece;
    piece.square = this.BOARD[coordinates];
    return this;
  }

  function _import(position) {
    for (var key in position) {
      this.place(position[key], key)
    }
    this.toMove = position.toMove;
    return this;
  }

  function findGeneral() {
    for (var coordinates in self) {
      var piece = self[coordinates];
      if (piece.color === toMove && piece.type === 'General') {
        return coordinates;
      }
    }
  }

  function isCheck() {
    var general_location = findGeneral();
    for (var coordinates in self) {
      piece = self[coordinates];
      if (piece.color === toMove) {
        continue;
      }
      if (piece.getMoves(self).indexOf(general_location) !== -1) {
        return true;
      }
    }
    return false;
  }

  Object.defineProperties(this, {
    toMove: {
      get: function() { return toMove; },
      set: function(color) { toMove = color; },
      enumerable: false
    },
    place: { value: place, enumerable: false },
    'import': { value: _import, enumerable: false },
    isCheck: {
      get: function() { return isCheck(); },
      enumerable: false
    }
  });
}

Position.prototype = {
  BOARD: new Board()
};

module.exports = Position;
