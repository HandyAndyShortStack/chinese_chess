var Piece = require('./piece.js');

function Soldier(color) {
  var self = new Piece(color);

  self.type = 'Soldier';

  self.getMoves = function(position) {
    var moves = [];
    var forward = this.color === 'red' ? 'up' : 'down';
    var continent = position.BOARD.continents[this.color];
    if (continent[this.square.coordinates]) {
      var directions = [forward];
    } else {
      var directions = ['left', forward, 'right'];
    }
    for (var dir_index = 0; dir_index < directions.length; dir_index += 1) {
      var direction = directions[dir_index];
      var target_square = this.square[direction];
      if (!target_square) {
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

module.exports = Soldier;
