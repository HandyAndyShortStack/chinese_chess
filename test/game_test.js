new Test('piece movement', function() {

  new Test('pieces can move', function() {
    var game = new Game();
    game.move('h3', 'e3');
    assert (game.board.e3.abbreviation === 'C');
    assert (!game.board.h3);
  });

  new Test('pieces have move lists', function() {
    var game = new Game();
    assert (!!game.legalMoves('a1'));
  });

  new Test('game knows whose turn it is', function() {
    var game = new Game();
    assert (game.toMove === 'red');
    game.move('h1', 'g3');
    assert (game.toMove === 'black');
  });

  new Test('game knows when a general is in check', function() {
    var game = new Game();
    game.move('b3', 'b6');
    game.move('a10', 'a9');
    game.move('b6', 'e6');
    assert (game.isCheck);
  });

  new Test('generals can check each other', function() {
    var game = new Game();
    game.move('e1', 'f2');
    game.move('e10', 'f9');
    assert (game.isCheck);
  });
});
