if (typeof window === 'undefined') {
  module.exports = Piece;
}

function Piece(color) {
  this.color = color;
}
