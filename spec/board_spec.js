var Board = require('../src/board.js');

describe('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board();
  })

  it('can find squares', function() {
    var square = board[[0, 0]];

    expect(square.constructor.name).toEqual('Square');
  });

  it('points squares to each other properly', function() {
    var square = board[[0, 0]];

    expect(square.left).toBeUndefined();
    expect(square.down).toBeUndefined();
    expect(square.right.constructor.name).toEqual('Square');
    expect(square.up.constructor.name).toEqual('Square');
  });

  it('has continents', function() {
    expect(board.continents.red).toBeDefined
    expect(board.continents.black).toBeDefined
  });

  it('has palaces', function() {
    expect(board.palaces.red).toBeDefined
    expect(board.palaces.black).toBeDefined
  });
});
