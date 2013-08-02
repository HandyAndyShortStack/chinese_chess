var Advisor = require('../src/advisor.js');
var Position = require('../src/position.js');

describe('Advisor', function() {
  var advisor;
  var position;

  beforeEach(function() {
    advisor = new Advisor('red');
    position = new Position();
  });

  it('gives an accurate move list', function() {
    position.import({
      '4,1': advisor,
      '5,2': new Advisor('red'),
      '5,0': new Advisor('black')
    });
    var moveList = advisor.getMoves(position);

    expect(moveList.indexOf('3,2')).not.toBe(-1);
    expect(moveList.indexOf('5,0')).not.toBe(-1);
    expect(moveList.indexOf('5,2')).toBe(-1);
  });

  it('cannot move outside of its palace', function() {
    position.import({ '3,2': advisor });
    var moveList = advisor.getMoves(position);
    
    expect(moveList.indexOf('2,1')).toBe(-1);
  });
});
