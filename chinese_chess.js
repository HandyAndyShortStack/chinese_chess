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

    function Square(file, rank) {
      this.name = ' abcdefghi'[file] + rank;
      this.file = file;
      this.rank = rank;
    }

    for (var file = 1; file <= 9; file += 1 ) {
      for (var rank = 1; rank <= 10; rank += 1) {
        var square = new Square(file, rank);
        BOARD[square.name] = new Square(file, rank);
        if (rank <= 5) {
          BOARD.continents.red[square.name] = square;
        } else {
          BOARD.continents.black[square.name] = square;
        }
      }
    }
    for (var file = 4; file <= 6; file += 1) {
      for (var rank = 1; rank <= 3; rank += 1) {
        red_square = new Square(file, rank);
        black_square = new Square(file, rank);
        BOARD.palaces.red[red_square.name] = red_square;
        BOARD.palaces.black[black_square.name] = black_square;
      }
    }
  })();

  Object.defineProperties(BOARD, {
    palaces: { enumerable: false },
    continents: { enumerable: false }
  });
}
Object.freeze(BOARD);

var CHESSMEN = {

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

  for (var piece in CHESSMEN) {
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

  function move(start, end) {
    var piece = board[start];
    board[end] = piece;
    delete board[start];
  }

  function legalMoves(square) {
    var piece = board[square];
    switch (piece.abbreviation) {
      case 'R':
        return getChariotRange(square);
      case 'H':
        return getHorseRange(square);
      case 'E':
        return getElephantRange(square);
      case 'A':
        return getAdvisorRange(square);
      case 'G':
        return getGeneralRange(square);
      case 'C':
        return getCannonRange(square);
      case 'S':
        return getSoldierRange(square);
    }
  }

  function getChariotRange(square) {

  }

  Object.defineProperties(this, {
    board: {
      get: function() { return board; },
      set: function() { board = arguments[0]; }
    },
    move: { value: function() { move.apply(this, arguments); } }
  });
}
