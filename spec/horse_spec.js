var Horse = require('../src/horse.js');
var Position = require('../src/position.js');

describe('Horse', function() {
  var horse;
  var position;

  beforeEach(function() {
    horse = new Horse();
    position = new Position();
  });

  it('gives an accurate move list', function() {
    position.import({
      '2,2': horse,
      '4,0': new Horse('red'),
      '1,4': new Horse('black')
    });
    var moveList = horse.getMoves(position);

    expect(moveList.indexOf('1,0')).not.toBe(-1);
    expect(moveList.indexOf('1,4')).not.toBe(-1);
    expect(moveList.indexOf('4,0')).toBe(-1);
  });
});
