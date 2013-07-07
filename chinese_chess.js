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
    palaces: { enumerable: false },
    continents: { enumerable: false }
  });
}
Object.freeze(BOARD);

CHESSMEN = {

  Chariot: function(color) {
    return {
      color: color,
      abbreviation: 'R'
    };
  },

  Horse: function(color) {
    return {
      color: color,
      abbreviation: 'H'
    };
  },

  Elephant: function(color) {
    return {
      color: color,
      abbreviation: 'E'
    };
  },

  Advisor: function(color) {
    return {
      color: color,
      abbreviation: 'A'
    };
  },
  
  General: function(color) {
    return {
      color: color,
      abbreviation: 'G'
    };
  },
  
  Cannon: function(color) {
    return {
      color: color,
      abbreviation: 'C'
    };
  },
  
  Soldier: function(color) {
    return {
      color: color,
      abbreviation: 'S'
    };
  }
}
Object.freeze(CHESSMEN)

function Game() {

  for (piece in CHESSMEN) {
    eval('var ' + piece + ' = CHESSMEN.' + piece);
  }

  var board = {
    a1: new Chariot('red'),
    b1: new Horse('red'),
    c1: new Elephant('red'),
    d1: new Advisor('red'),
    e1: new General('red'),
    f1: new Advisor('red'),
    g1: new Elephant('red'),
    h1: new Horse('red'),
    i1: new Chariot('red'),
    b3: new Cannon('red'),
    h3: new Cannon('red'),
    a4: new Soldier('red'),
    c4: new Soldier('red'),
    e4: new Soldier('red'),
    g4: new Soldier('red'),
    i4: new Soldier('red'),
    a10: new Chariot('black'),
    b10: new Horse('black'),
    c10: new Elephant('black'),
    d10: new Advisor('black'),
    e10: new General('black'),
    f10: new Advisor('black'),
    g10: new Elephant('black'),
    h10: new Horse('black'),
    i10: new Chariot('black'),
    b8: new Cannon('black'),
    h8: new Cannon('black'),
    a7: new Soldier('black'),
    c7: new Soldier('black'),
    e7: new Soldier('black'),
    g7: new Soldier('black'),
    i7: new Soldier('black')
  };

  return {
    board: board
  };
}
