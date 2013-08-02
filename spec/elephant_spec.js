var Elephant = require('../src/elephant.js');
var Position = require('../src/position.js');

describe('Elephant', function() {
  var elephant;
  var position;

  beforeEach(function() {
    elephant = new Elephant('red');
    position = new Position();
  });

  it('gives an accurate move list', function() {
    position.import({
      '4,2': elephant,
      '2,4': new Elephant('red'),
      '6,0': new Elephant('black')
    });
    var moveList = elephant.getMoves(position);

    expect(moveList.indexOf('2,0')).not.toBe(-1);
    expect(moveList.indexOf('6,0')).not.toBe(-1);
    expect(moveList.indexOf('2,4')).toBe(-1);
  });

  it('cannot move outside of its continent', function() {
    position.import({ '2,4': elephant });
    var moveList = elephant.getMoves(position);
    
    expect(moveList.indexOf('4,6')).toBe(-1);
  });
});
