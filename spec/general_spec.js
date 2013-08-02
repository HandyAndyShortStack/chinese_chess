var General = require('../src/general.js');
var Position = require('../src/position.js');

describe('General', function() {
  var general;
  var position;

  beforeEach(function() {
    general = new General('red');
    position = new Position();
  });

  it('gives an accurate move list', function() {
    position.import({
      '4,0': general,
      '3,0': new General('red'),
      '5,0': new General('black')
    });
    var moveList = general.getMoves(position);

    expect(moveList.indexOf('4,1')).not.toBe(-1);
    expect(moveList.indexOf('5,0')).not.toBe(-1);
    expect(moveList.indexOf('3,0')).toBe(-1);
  });

  it('cannot move outside of its palace', function() {
    position.import({ '3,0': general });
    var moveList = general.getMoves(position);
    
    expect(moveList.indexOf('2,0')).toBe(-1);
  });
});
