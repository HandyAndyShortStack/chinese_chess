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
    var forward = toMove === 'red' ? 'up' : 'down';
    var next_square = self.BOARD[general_location][forward];
    while (next_square) {
      current_square = next_square;
      if (self[current_square.coordinates]) {
        if (self[current_square.coordinates].type === 'General') {
          return true;
        }
        break;
      }
      next_square = current_square[forward];
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

Object.defineProperties(Position.prototype, {
  BOARD: { value: new Board(), enumerable: false }
});

module.exports = Position;
