var StartingPosition = require('../src/starting_position.js');

describe('StartingPosition', function() {
  var position;

  it('has pieces on squares', function() {
    position = new StartingPosition();
    var coordinates = Object.keys(position)[0];

    expect(position[coordinates].square).toBeDefined();
  });
});
