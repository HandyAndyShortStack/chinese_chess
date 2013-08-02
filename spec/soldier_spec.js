var Soldier = require('../src/soldier.js');
var Position = require('../src/position.js');

describe('Soldier', function() {
  var soldier;
  var position;

  beforeEach(function() {
    soldier = new Soldier('red');
    position = new Position();
  });

  it('moves one square forward behind the river', function() {
    position.import({
      '0,3': soldier
    });
    var moveList = soldier.getMoves(position);

    expect(moveList.indexOf('0,4')).not.toBe(-1);
    expect(moveList.indexOf('1,3')).toBe(-1);    
  });

  it('attacks one square forward behind the river', function() {
    position.import({
      '0,3': soldier,
      '0,4': new Soldier('black')
    });
    var moveList = soldier.getMoves(position);

    expect(moveList.indexOf('0,4')).not.toBe(-1);
  });

  it('is blocked by pieces of its own color', function() {
    position.import({
      '0,3': soldier,
      '0,4': new Soldier('red')
    });
    var moveList = soldier.getMoves(position);

    expect(moveList.indexOf('0,4')).toBe(-1);
  });

  it('can move sideways and forwards once it crosses the river', function() {
    position.import({
      '0,5': soldier
    });
    var moveList = soldier.getMoves(position);

    expect(moveList.indexOf('0,6')).not.toBe(-1);
    expect(moveList.indexOf('1,5')).not.toBe(-1);   
  });
});
