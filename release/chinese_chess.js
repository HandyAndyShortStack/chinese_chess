(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./piece.js":9}],2:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Square = require('./square.js');
  module.exports = Board;
}

function Board() {

  var continents = { red: {}, black: {} };
  var palaces = { red: {}, black: {} };

  for (var x = 0; x < 9; x += 1) {
    for (var y = 0; y < 10; y += 1) {
      var coordinates = x + ',' + y;
      var square = new Square(x, y);
      this[coordinates] = square;
      var leftSquare = this[(x - 1) + ',' + y];
      var downSquare = this[x + ',' + (y - 1)];
      if (leftSquare) { square.left = leftSquare; leftSquare.right = square; }
      if (downSquare) { square.down = downSquare; downSquare.up = square }
      if (y < 5) {
        continents.red[coordinates] = square;
      } else {
        continents.black[coordinates] = square;
      }
      if (y < 3 && x < 6 && x > 2) {
        palaces.red[coordinates] = square;
      } else if (y > 6 && x < 6 && x > 2) {
        palaces.black[coordinates] = square;
      }
    }
  }

  Object.defineProperties(this, {
    continents: { value: continents, enumerable: false },
    palaces: { value: palaces, enumerable: false }
  });
}

},{"./square.js":12}],3:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = Cannon;
}

function Cannon(color) {
  var self = new Piece(color);

  self.type = 'Cannon';

  self.getMoves = function(position) {
    var moves = [];
    var directions = ['left', 'right', 'up', 'down'];
    for (var dir_index = 0; dir_index < directions.length; dir_index += 1) {
      var direction = directions[dir_index];
      var next_square = this.square[direction];
      while (next_square) {
        current_square = next_square;
        if (position[current_square.coordinates]) {
          next_square = current_square[direction];
          while (next_square) {
            current_square = next_square;
            if (position[current_square.coordinates]) {
              if (position[current_square.coordinates].color !== this.color) {
                moves.push(current_square.coordinates);
              }
              break;
            }
            next_square = current_square[direction];
          }
          break;
        }
        moves.push(current_square.coordinates);
        next_square = current_square[direction];
      }
    }
    return moves;
  };

  return self;
}


},{"./piece.js":9}],4:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = Chariot;
}

function Chariot(color) {
  var self = new Piece(color);

  self.type = 'Chariot';

  self.getMoves = function(position) {
    var moves = [];
    var directions = ['left', 'right', 'up', 'down'];
    for (var dir_index = 0; dir_index < directions.length; dir_index += 1) {
      var direction = directions[dir_index];
      var next_square = this.square[direction];
      while (next_square) {
        current_square = next_square;
        if (position[current_square.coordinates]) {
          if (position[current_square.coordinates].color !== this.color) {
            moves.push(current_square.coordinates);
          }
          break;
        }
        moves.push(current_square.coordinates);
        next_square = current_square[direction];
      }
    }
    return(moves);
  };

  return self;
}

},{"./piece.js":9}],5:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = Elephant;
}

function Elephant(color) {
  var self = new Piece(color);

  self.type = 'Elephant';

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

},{"./piece.js":9}],6:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Position = require('./position.js');
  var StartingPosition = require('./starting_position.js');
  module.exports = Game;
}

function Game() {
  var position = new StartingPosition;

  function importPosition(_position) {
    if (typeof _position.import === 'function') {
      position = _position;
    } else {
      position = (new Position).import(_position);
    }
  }

  function toggleToMove() {
    position.toMove = position.toMove === 'red' ? 'black' : 'red';
  }

  function move(startingCoordinates, targetCoordinates) {
    var piece = position[startingCoordinates];
    delete position[startingCoordinates];
    position.place(piece, targetCoordinates);
    toggleToMove();
  }

  function isLegal(startingCoordinates, endingCoordinates) {
    var movingPiece = position[startingCoordinates];
    var attackedPiece = position[endingCoordinates];

    if (movingPiece.color !== position.toMove) {
      return false;
    }
    move(startingCoordinates, endingCoordinates);
    toggleToMove();
    var legal = position.isCheck ? false : true;
    delete position[endingCoordinates];
    position.place(movingPiece, startingCoordinates);
    if (typeof attackedPiece !== 'undefined') {
      position.place(attackedPiece, endingCoordinates);
    }
    return legal;
  }

  function legalMoves() {
    var moves = {};
    var rawMoves = position.rawMoves;
    for (var startingCoordinates in rawMoves) {
      var endingSquares = rawMoves[startingCoordinates];
      for (var i = 0; i < endingSquares.length; i += 1) {
        var endingCoordinates = endingSquares[i];
        if (isLegal(startingCoordinates, endingCoordinates)) {
          if (typeof moves[startingCoordinates] === 'undefined') {
            moves[startingCoordinates] = [];
          }
          moves[startingCoordinates].push(endingCoordinates);
        }
      }
    }
    return moves;
  }

  function isCheckmate() {
    return Object.keys(legalMoves).length === 0;
  }

  Object.defineProperties(this, {
    position: {
      get: function() { return position; }
    },
    importPosition: { value: importPosition },
    move: { value: move },
    legalMoves: { 
      get: function() { return legalMoves(); }
    },
    isCheckmate: {
      get: function() { return isCheckmate(); }
    }
  });
}

},{"./position.js":10,"./starting_position.js":13}],7:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = General;
}

function General(color) {
  var self = new Piece(color);

  self.type = 'General';

  self.getMoves = function(position) {
    var moves = [];
    var palace = position.BOARD.palaces[this.color];
    var directions = ['left', 'right', 'up', 'down'];
    for(var dir_index = 0; dir_index < 4; dir_index += 1) {
      direction = directions[dir_index];
      target_square = this.square[direction];
      if (!target_square || !palace[target_square.coordinates]) {
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

},{"./piece.js":9}],8:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = Horse;
}

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

},{"./piece.js":9}],9:[function(require,module,exports){
if (typeof window === 'undefined') {
  module.exports = Piece;
}

function Piece(color) {
  this.color = color;
}

},{}],10:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Board = require('./board.js');
  module.exports = Position;
}

function Position() {
  var self = this;
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
    this.toMove = position.toMove || toMove;
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

  function rawMoves() {
    var moves = {};
    for (var coordinates in self) {
      moves[coordinates] = self[coordinates].getMoves(self);
    }
    return moves;
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
    },
    rawMoves: {
      get: function() { return rawMoves(); },
      enumerable: false
    }
  });
}

Object.defineProperties(Position.prototype, {
  BOARD: { value: new Board(), enumerable: false }
});

},{"./board.js":2}],11:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Piece = require('./piece.js');
  module.exports = Soldier;
}

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

},{"./piece.js":9}],12:[function(require,module,exports){
if (typeof window === 'undefined') {
  module.exports = Square;
}

function Square(x, y) {
  var left;
  var right;
  var up;
  var down;

  this.x = x;
  this.y = y;
  this.coordinates = x + ',' + y;

  Object.defineProperties(this, {
    left: {
      get: function() { return left; },
      set: function(square) { left = square; }
    },
    right: {
      get: function() { return right; },
      set: function(square) { right = square; }
    },
    up: {
      get: function() { return up; },
      set: function(square) { up = square; }
    },
    down: {
      get: function() { return down; },
      set: function(square) { down = square; }
    }
  });
}

},{}],13:[function(require,module,exports){
if (typeof window === 'undefined') {
  var Position = require('./position.js');
  var Chariot = require('./chariot.js');
  var Horse = require('./horse.js');
  var Elephant = require('./elephant.js');
  var Advisor = require('./advisor.js');
  var General = require('./general.js');
  var Cannon = require('./cannon.js');
  var Soldier = require('./soldier.js');
  module.exports = StartingPosition;
}

function StartingPosition() {
  var self = new Position();

  self.place(new Chariot('red'), [0, 0])
    .place(new Horse('red'), [1, 0])
    .place(new Elephant('red'), [2, 0])
    .place(new Advisor('red'), [3, 0])
    .place(new General('red'), [4, 0])
    .place(new Advisor('red'), [5, 0])
    .place(new Elephant('red'), [6, 0])
    .place(new Horse('red'), [7, 0])
    .place(new Chariot('red'), [8, 0])
    .place(new Cannon('red'), [1, 2])
    .place(new Cannon('red'), [7, 2])
    .place(new Soldier('red'), [0, 3])
    .place(new Soldier('red'), [2, 3])
    .place(new Soldier('red'), [4, 3])
    .place(new Soldier('red'), [6, 3])
    .place(new Soldier('red'), [8, 3])
    .place(new Chariot('black'), [0, 9])
    .place(new Horse('black'), [1, 9])
    .place(new Elephant('black'), [2, 9])
    .place(new Advisor('black'), [3, 9])
    .place(new General('black'), [4, 9])
    .place(new Advisor('black'), [5, 9])
    .place(new Elephant('black'), [6, 9])
    .place(new Horse('black'), [7, 9])
    .place(new Chariot('black'), [8, 9])
    .place(new Cannon('black'), [1, 7])
    .place(new Cannon('black'), [7, 7])
    .place(new Soldier('black'), [0, 6])
    .place(new Soldier('black'), [2, 6])
    .place(new Soldier('black'), [4, 6])
    .place(new Soldier('black'), [6, 6])
    .place(new Soldier('black'), [8, 6]);

  self.toMove = 'red';

  return self;
}

},{"./advisor.js":1,"./cannon.js":3,"./chariot.js":4,"./elephant.js":5,"./general.js":7,"./horse.js":8,"./position.js":10,"./soldier.js":11}]},{},[6]);
