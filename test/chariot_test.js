new Test('chariot movement', function() {

  var game, board;
  function beforeMovement() {
    game = new Game();
    board = { a1: new CHESSMEN.Chariot() };
    game.board = board;
  }

  new Test('chariots can move horizontally', function() {
    beforeMovement();
    game.move('a1', 'f1');
    assert (game.board.f1.abbreviation === 'R');
    assert (!game.board.a1);
  });

  new Test('chariots can move vertically', function() {
    beforeMovement();
    game.move('a1', 'a8');
    assert (game.board.a8.abbreviation === 'R');
    assert (!game.board.a1);
  });

});
