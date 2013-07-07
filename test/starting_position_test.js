new Test('game begins with all pieces on proper squares', function() {

  var game = new Game();

  new Test('red pieces are in their proper places', function() {

    new Test('there is a red chariot on a1', function() {
      var piece = game.board.a1;
      assert (piece.abbreviation === 'R');
      assert (piece.color === 'red');
    });

    new Test('there is a red horse on b1', function() {
      var piece = game.board.b1;
      assert (piece.abbreviation === 'H');
      assert (piece.color === 'red');
    });

    new Test('there is a red elephant on c1', function() {
      var piece = game.board.c1;
      assert (piece.abbreviation === 'E');
      assert (piece.color === 'red');
    });

    new Test('there is a red advisor on d1', function() {
      var piece = game.board.d1;
      assert (piece.abbreviation === 'A');
      assert (piece.color === 'red');
    });

    new Test('there is a red general on e1', function() {
      var piece = game.board.e1;
      assert (piece.abbreviation === 'G');
      assert (piece.color === 'red');
    });

    new Test('there is a red advisor on f1', function() {
      var piece = game.board.f1;
      assert (piece.abbreviation === 'A');
      assert (piece.color === 'red');
    });

    new Test('there is a red elephant on g1', function() {
      var piece = game.board.g1;
      assert (piece.abbreviation === 'E');
      assert (piece.color === 'red');
    });

    new Test('there is a red horse on h1', function() {
      var piece = game.board.h1;
      assert (piece.abbreviation === 'H');
      assert (piece.color === 'red');
    });

    new Test('there is a red chariot on i1', function() {
      var piece = game.board.i1;
      assert (piece.abbreviation === 'R');
      assert (piece.color === 'red');
    });

    new Test('there is a red cannon on b3', function() {
      var piece = game.board.b3;
      assert (piece.abbreviation === 'C');
      assert (piece.color === 'red');
    });

    new Test('there is a red cannon on h3', function() {
      var piece = game.board.h3;
      assert (piece.abbreviation === 'C');
      assert (piece.color === 'red');
    });

    new Test('there is a red soldier on a4', function() {
      var piece = game.board.a4;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'red');
    });

    new Test('there is a red soldier on c4', function() {
      var piece = game.board.c4;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'red');
    });

    new Test('there is a red soldier on e4', function() {
      var piece = game.board.e4;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'red');
    });

    new Test('there is a red soldier on g4', function() {
      var piece = game.board.g4;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'red');
    });

    new Test('there is a red soldier on i4', function() {
      var piece = game.board.i4;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'red');
    });
  });

  new Test('black pieces are in their proper places', function() {

    new Test('there is a black chariot on a10', function() {
      var piece = game.board.a10;
      assert (piece.abbreviation === 'R');
      assert (piece.color === 'black');
    });

    new Test('there is a black horse on b10', function() {
      var piece = game.board.b10;
      assert (piece.abbreviation === 'H');
      assert (piece.color === 'black');
    });

    new Test('there is a black elephant on c10', function() {
      var piece = game.board.c10;
      assert (piece.abbreviation === 'E');
      assert (piece.color === 'black');
    });

    new Test('there is a black advisor on d10', function() {
      var piece = game.board.d10;
      assert (piece.abbreviation === 'A');
      assert (piece.color === 'black');
    });

    new Test('there is a black general on e10', function() {
      var piece = game.board.e10;
      assert (piece.abbreviation === 'G');
      assert (piece.color === 'black');
    });

    new Test('there is a black advisor on f10', function() {
      var piece = game.board.f10;
      assert (piece.abbreviation === 'A');
      assert (piece.color === 'black');
    });

    new Test('there is a black elephant on g10', function() {
      var piece = game.board.g10;
      assert (piece.abbreviation === 'E');
      assert (piece.color === 'black');
    });

    new Test('there is a black horse on h10', function() {
      var piece = game.board.h10;
      assert (piece.abbreviation === 'H');
      assert (piece.color === 'black');
    });

    new Test('there is a black chariot on i10', function() {
      var piece = game.board.i10;
      assert (piece.abbreviation === 'R');
      assert (piece.color === 'black');
    });

    new Test('there is a black cannon on b8', function() {
      var piece = game.board.b8;
      assert (piece.abbreviation === 'C');
      assert (piece.color === 'black');
    });

    new Test('there is a black cannon on h8', function() {
      var piece = game.board.h8;
      assert (piece.abbreviation === 'C');
      assert (piece.color === 'black');
    });

    new Test('there is a black soldier on a7', function() {
      var piece = game.board.a7;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'black');
    });

    new Test('there is a black soldier on c7', function() {
      var piece = game.board.c7;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'black');
    });

    new Test('there is a black soldier on e7', function() {
      var piece = game.board.e7;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'black');
    });

    new Test('there is a black soldier on g7', function() {
      var piece = game.board.g7;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'black');
    });

    new Test('there is a black soldier on i7', function() {
      var piece = game.board.i7;
      assert (piece.abbreviation === 'S');
      assert (piece.color === 'black');
    });
  });
});
