new Test('piece movement', function() {

  new Test('pieces can move', function() {
    var game = new Game();
    game.move('h3', 'e3');
    assert (game.board.e3.abbreviation === 'C');
    assert (!game.board.h3);
  });
});
