if (typeof(BOARD) === 'undefined') {
  var BOARD = {
    palaces: { 
      red: {},
      black: {}
    },
    continents: {
      red: {},
      black: {}
    }
  };
  (function() {
    for (var file = 0; file < 9; file += 1 ) {
      for (var rank = 1; rank <= 10; rank += 1) {
        var square = ('abcdefghi')[file] + rank;
        BOARD[square] = true;
        if (rank <= 5) {
          BOARD.continents.red[square] = true;
        } else {
          BOARD.continents.black[square] = true;
        }
      }
    }
    for (var file = 0; file < 3; file += 1) {
      for (var rank = 1; rank <= 3; rank += 1) {
        BOARD.palaces.red[('def')[file] + rank] = true;
        BOARD.palaces.black[('def')[file] + (rank + 7)] = true;
      }
    }
  })();
  Object.defineProperties(BOARD, {
    palaces: {
      enumerable: false
    },
    continents: {
      enumerable: false
    }
  });
}

var chessSet = {

}

function Game() {

}
