var Position = require('../src/position.js');
var Chariot = require('../src/chariot.js');
var General = require('../src/general.js');

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
    position.toMove = 'red';

    expect(position.isCheck).toBe(true);
  });

  it('knows if the general is not in check', function() {
    position.import({
      '3,0': new General('red'),
      '4,2': new Chariot('black') 
    });
    position.toMove = 'red';

    expect(position.isCheck).toBe(false);
  });

  it('knows that generals check each other', function() {
    position.import({
      '4,0': new General('red'),
      '4,9': new General('black') 
    });
    position.toMove = 'red';

    expect(position.isCheck).toBe(true);
  });
});
