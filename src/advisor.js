if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = Advisor;
}

function Advisor(color) {
  var self = new Piece(color);

  self.type = "Advisor";

  self.getMoves = function(position) {
    var moves = [];
    var palace = position.BOARD.palaces[this.color];
    var directions = [
      ['left', 'up'],
      ['up', 'right'],
      ['right', 'down'],
      ['down', 'left']
    ];
    for (var dir_index = 0; dir_index < 4; dir_index += 1) {
      var direction = directions[dir_index];
      if (!this.square[direction[0]] || !this.square[direction[1]]) {
        continue;
      }
      var target_square = this.square[direction[0]][direction[1]];
      if (!palace[target_square.coordinates]) {
        continue;
      }
      if (!position[target_square.coordinates] ||
        position[target_square.coordinates].color !== this.color) {
        moves.push(target_square.coordinates);
      }
    }
    return moves;
  };

  return self;
}
