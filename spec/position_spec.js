var Position = require('../src/position.js');

describe('Position', function() {
  var position;

  beforeEach(function() {
    position = new Position();
  });

  it('knows whose turn it is', function() {
    expect(position.toMove).toEqual('red');
  });
});
