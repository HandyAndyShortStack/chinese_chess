var Board = require('../src/board.js');

describe('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board();
  })

  it('can find squares', function() {
    var square = board.findSquare(0, 0);
    
    expect(square.constructor.name).toEqual('Square');
  });

  it('points squares to each other properly', function() {
    var square = board.findSquare(0, 0);

    expect(square.left).toBeUndefined();
    expect(square.down).toBeUndefined();
    expect(square.right.constructor.name).toEqual('Square');
    expect(square.up.constructor.name).toEqual('Square');
  });
});
