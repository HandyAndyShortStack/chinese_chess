function Position() {
  var toMove = 'red';

  function place(piece, square) {
    this[square] = piece;
    piece.square = square;
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

module.exports = Position;
