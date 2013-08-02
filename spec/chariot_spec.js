var Chariot = require('../src/chariot.js');
var Position = require('../src/position.js');

describe('Chariot', function() {
  var position;
  var chariot;

  beforeEach(function() {
    position = new Position();
    chariot = new Chariot('red');
  });

  it('gives an accurate move list', function() {
    position.import({
      '0,0': chariot,
      '5,0': new Chariot('red'),
      '0,8': new Chariot('black')
    });
    var moveList = chariot.getMoves(position);

    expect(moveList.indexOf('0,1')).not.toBe(-1);
    expect(moveList.indexOf('0,8')).not.toBe(-1);
    expect(moveList.indexOf('5,0')).toBe(-1);
  });
});
