var Cannon = require('../src/cannon.js');
var Position = require('../src/position.js');

describe('Cannon', function() {
  var cannon;
  var position;

  beforeEach(function() {
    cannon = new Cannon('red');
    position = new Position();
  });

  it('gives an accurate move list', function() {
    position.import({
      '0,0': cannon,
      '0,5': new Cannon('red'),
      '0,8': new Cannon('black')
    });
    var moveList = cannon.getMoves(position);

    expect(moveList.indexOf('0,1')).not.toBe(-1);
    expect(moveList.indexOf('0,8')).not.toBe(-1);
    expect(moveList.indexOf('0,5')).toBe(-1);
    expect(moveList.indexOf('0,6')).toBe(-1);
  });
});
