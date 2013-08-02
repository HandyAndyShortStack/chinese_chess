var Piece = require('./piece.js');

function Elephant(color) {
  var self = new Piece(color);

  self.getMoves = function(position) {
    var moves = [];
    var continent = position.BOARD.continents[this.color];
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
      var blocking_square = this.square[direction[0]][direction[1]];
      if (position[blocking_square.coordinates]) {
        continue;
      }
      if (!blocking_square[direction[0]] || !blocking_square[direction[1]]) {
        continue;
      }
      var target_square = blocking_square[direction[0]][direction[1]];
      if (!continent[target_square.coordinates]) {
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

Elephant.prototype.constructor = Elephant;

module.exports = Elephant;
