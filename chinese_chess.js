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

      this.file = file;
      this.rank = rank;
      this.name = getName(file, rank);

      function getName(file, rank) {
        return ' abcdefghi '[file] + rank;
      }

      Object.defineProperties(this, {
        left: { get: function() { return BOARD[getName(file - 1, rank)]; } },
        right: { get: function() { return BOARD[getName(file + 1, rank)]; } },
        up: { get: function() { return BOARD[getName(file, rank + 1)]; } },
        down: { get: function() { return BOARD[getName(file, rank - 1)]; } }
      });
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
      abbreviation: 'R',
      type: 'Chariot'
    };
  },

  Horse: function(color) {
    return {
      color: color,
      abbreviation: 'H',
      type: 'Horse'
    };
  },

  Elephant: function(color) {
    return {
      color: color,
      abbreviation: 'E',
      type: 'Elephant'
    };
  },

  Advisor: function(color) {
    return {
      color: color,
      abbreviation: 'A',
      type: 'Advisor'
    };
  },
  
  General: function(color) {
    return {
      color: color,
      abbreviation: 'G',
      type: 'General'
    };
  },
  
  Cannon: function(color) {
    return {
      color: color,
      abbreviation: 'C',
      type: 'Cannon'
    };
  },
  
  Soldier: function(color) {
    return {
      color: color,
      abbreviation: 'S',
      type: 'Soldier'
    };
  }
}
Object.freeze(CHESSMEN)

function Game(board, toMove) {

  if (typeof(board) === 'undefined') {
    var board = {
      a1: CHESSMEN.Chariot('red'),
      b1: CHESSMEN.Horse('red'),
      c1: CHESSMEN.Elephant('red'),
      d1: CHESSMEN.Advisor('red'),
      e1: CHESSMEN.General('red'),
      f1: CHESSMEN.Advisor('red'),
      g1: CHESSMEN.Elephant('red'),
      h1: CHESSMEN.Horse('red'),
      i1: CHESSMEN.Chariot('red'),
      b3: CHESSMEN.Cannon('red'),
      h3: CHESSMEN.Cannon('red'),
      a4: CHESSMEN.Soldier('red'),
      c4: CHESSMEN.Soldier('red'),
      e4: CHESSMEN.Soldier('red'),
      g4: CHESSMEN.Soldier('red'),
      i4: CHESSMEN.Soldier('red'),
      a10: CHESSMEN.Chariot('black'),
      b10: CHESSMEN.Horse('black'),
      c10: CHESSMEN.Elephant('black'),
      d10: CHESSMEN.Advisor('black'),
      e10: CHESSMEN.General('black'),
      f10: CHESSMEN.Advisor('black'),
      g10: CHESSMEN.Elephant('black'),
      h10: CHESSMEN.Horse('black'),
      i10: CHESSMEN.Chariot('black'),
      b8: CHESSMEN.Cannon('black'),
      h8: CHESSMEN.Cannon('black'),
      a7: CHESSMEN.Soldier('black'),
      c7: CHESSMEN.Soldier('black'),
      e7: CHESSMEN.Soldier('black'),
      g7: CHESSMEN.Soldier('black'),
      i7: CHESSMEN.Soldier('black')
    };
  }

  if (typeof(toMove) === 'undefined') { var toMove = 'red'; }
  function toggleMove() {
    if (toMove === 'red') {
      toMove = 'black';
    } else {
      toMove = 'red';
    }
  }

  function move(start, end) {
    var piece = board[start];
    board[end] = piece;
    delete board[start];
    toggleMove();
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

  var DIRECTIONS = ['left', 'right', 'up', 'down'];

  function getChariotRange(square) {
    var range = [];

    for (var i = 0; i < 4; i += 1) {
      var direction = DIRECTIONS[i];
      var current_square = BOARD[square];
      while (current_square[direction]) {
        current_square = current_square[direction];
        if (board[current_square.name]) {
          if (board[current_square.name].color !== board[square].color) {
            range.push(current_square.name);
          }
          break;
        }
        range.push(current_square.name);
      }
    }
    return range;
  }

  function getHorseRange(square) {
    var range = [];
    function add(name) {
      if (board[name] && board[name].color === board[square].color) { 
        return;
      } else {
        range.push(name);
      }
    }
    if (BOARD[square].left && !board[BOARD[square].left.name]) {
      try { add(BOARD[BOARD[square].left.left.up.name].name); } catch(e) {}
      try { add(BOARD[BOARD[square].left.left.down.name].name); } catch(e) {}
    }
    if (BOARD[square].right && !board[BOARD[square].right.name]) {
      try { add(BOARD[BOARD[square].right.right.up.name].name); } catch(e) {}
      try { add(BOARD[BOARD[square].right.right.down.name].name); } catch(e) {}
    }
    if (BOARD[square].up && !board[BOARD[square].up.name]) {
      try { add(BOARD[BOARD[square].up.up.left.name].name); } catch(e) {}
      try { add(BOARD[BOARD[square].up.up.right.name].name); } catch(e) {}
    }
    if (BOARD[square].down && !board[BOARD[square].down.name]) {
      try { add(BOARD[BOARD[square].down.down.left.name].name); } catch(e) {}
      try { add(BOARD[BOARD[square].down.down.right.name].name); } catch(e) {}
    }
    return range;
  }

  var elephantMap = {
    a3: { c1: { block: 'b2' }, c5: { block: 'b4' } },
    c1: { a3: { block: 'b2' }, e3: { block: 'd2' } },
    c5: { a3: { block: 'b4' }, e3: { block: 'd4' } },
    e3: { c1: { block: 'd2' }, c5: { block: 'd4' },
          g1: { block: 'f2' }, g5: { block: 'f4' } },
    g1: { e3: { block: 'f2' }, i3: { block: 'h2' } },
    g5: { e3: { block: 'f4' }, i3: { block: 'h4' } },
    i3: { g1: { block: 'h2' }, g5: { block: 'h4' } },
    a8: { c6: { block: 'b7' }, c10: { block: 'b9' } },
    c6: {a8: { block: 'b7' }, e8: { block: 'd7' } },
    c10: {a8: { block: 'b9' }, e8: { block: 'd9' } },
    e8: { c6: { block: 'd7' }, c10: { block: 'd9' },
          g6: { block: 'f7' }, g10: { block: 'f9' } },
    g6: { e8: { block: 'f7' }, i8: { block: 'h7' } },
    g10: { e8: { block: 'f9' }, i8: { block: 'h9' } },
    i8: { g6: { block: 'h7' }, g10: { block: 'h9' } }
  };

  function getElephantRange(square) {
    var range = [];
    for (var target in elephantMap[square]) {
      if (!board[elephantMap[square][target].block] &&
        !(board[target] && board[target].color === board[square].color)) {
        range.push(target);
      }
    }
    return range;
  }

  var advisorMap = {
    d1: ['e2'],
    d3: ['e2'],
    e2: ['d1', 'd3', 'f1', 'f3'],
    f1: ['e2'],
    f3: ['e2'],
    d8: ['e9'],
    d10: ['e9'],
    e9: ['d8', 'd10', 'f8', 'f10'],
    f8: ['e9'],
    f10: ['e9']
  }

  function getAdvisorRange(square) {
    for (var i = 0; i < advisorMap[square].length; i += 1) {
      var range = [];
      var target = advisorMap[square][i];
      if (!board[target] || board[target].color !== board[square].color) {
        range.push(target);
      }
    }
    return range;
  }

  function getGeneralRange(square) {
    var range = [];
    var piece = board[square];
    for (var i = 0; i < 4; i += 1) {
      var direction = DIRECTIONS[i];
      try { 
        var target = BOARD[square][direction].name;
      } catch (e) {
        continue;
      }
      if (target && BOARD.palaces[piece.color][target] &&
        (!board[target] || board[target].color !== board[square].color)) {
        range.push(target);
      }
    }
    return range;
  }

  Object.defineProperties(this, {
    board: {
      get: function() { return board; },
      set: function() { board = arguments[0]; }
    },
    move: { value: function() { move.apply(this, arguments); } },
    legalMoves: { 
      value: function() {
        return legalMoves.apply(this, arguments); 
      }
    },
    toMove: { get: function() { return toMove; } }
  });
}
