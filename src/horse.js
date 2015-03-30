var Piece = require('./piece.js');
module.exports = Horse;

function Horse(color) {
  var self = new Piece(color);

  self.type = 'Horse'

  self.getMoves = function(position) {
    var moves = [];
    var directions = {
      left: ['down', 'up'],
      right: ['down', 'up'],
      up: ['left', 'right'],
      down: ['left', 'right']
    };
    for (var pri_dir_index = 0; pri_dir_index < 4; pri_dir_index += 1) {
      var primary_direction = Object.keys(directions)[pri_dir_index];
      var blocking_square = this.square[primary_direction];
      if (!blocking_square || position[blocking_square.coordinates]) {
        continue;
      }
      var pivot_square = blocking_square[primary_direction];
      if (!pivot_square) {
        continue;
      }
      for (var sec_dir_index = 0; sec_dir_index < 2; sec_dir_index += 1) {
        var secondary_direction = directions[primary_direction][sec_dir_index];
        var target_square = pivot_square[secondary_direction];
        if (target_square && (!position[target_square.coordinates] || 
          position[target_square.coordinates].color !== this.color)) {
          moves.push(target_square.coordinates);
        }
      }
    }
    return moves;
  };

  return self;
}
