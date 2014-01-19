var Position = require('./position.js');
var StartingPosition = require('./starting_position.js');

function Game() {
  var position = new StartingPosition;

  function importPosition(_position) {
    if (typeof _position.import === 'function') {
      position = _position;
    } else {
      position = (new Position).import(_position);
    }
  }

  function move(startingCoordinates, targetCoordinates) {
    var piece = position[startingCoordinates];
    delete position[startingCoordinates];
    position.place(piece, targetCoordinates);
  }

  function isLegal(startingCoordinates, endingCoordinates) {
    var piece = position[startingCoordinates];
    if (piece.color !== position.toMove) {
      return false;
    }
    move(startingCoordinates, endingCoordinates);
    var legal = position.isCheck ? false : true;
    delete position[endingCoordinates];
    position.place(piece, startingCoordinates);
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
            moves[startingCoordinates] = []
          }
          moves[startingCoordinates].push(endingCoordinates)
        }
      }
    }
    return moves;
  }

  Object.defineProperties(this, {
    position: {
      get: function() { return position; }
    },
    importPosition: { value: importPosition },
    move: { value: move },
    legalMoves: { 
      get: function() { return legalMoves(); }
    }
  });
}

module.exports = Game;
