var Position = require('../src/position.js');
var Chariot = require('../src/chariot.js');
var Horse = require('../src/horse.js');
var Elephant = require('../src/elephant.js');
var Advisor = require('../src/advisor.js');
var General = require('../src/general.js');
var Cannon = require('../src/cannon.js');
var Soldier = require('../src/soldier.js');

describe('Position', function() {
  var position;

  beforeEach(function () {
    position = new Position();
  });

  it('knows if the general is in check', function() {
    position.import({
      '4,0': new General('red'),
      '4,2': new Chariot('black') 
    });
    position.toMove = 'red'

    expect(position.isCheck).toBe(true);
  });

  it('knows if the general is not in check', function() {
    position.import({
      '3,0': new General('red'),
      '4,2': new Chariot('black') 
    });
    position.toMove = 'red'

    expect(position.isCheck).toBe(false);
  });
});
