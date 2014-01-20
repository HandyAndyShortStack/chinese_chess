var Game = require('../src/game.js');
var Position = require('../src/position.js');
var StartingPosition = require('../src/starting_position.js');
var Soldier = require('../src/soldier.js');
var General = require('../src/general.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can import position objects', function() {
    startingPosition = new StartingPosition
    game.importPosition(startingPosition);

    expect(game.position == startingPosition).toBeTruthy();
  });

  it('can import objects to pass to postions', function() {
    game.importPosition({'0,3': new Soldier('red')});

    expect(game.position.constructor == Position).toBeTruthy();
  });

  it('can move pieces', function() {
    game.importPosition(new StartingPosition);
    game.move('7,2', '4,2');

    expect(game.position['4,2'].color).toBe('red');
    expect(game.position['7,2']).toBeUndefined();
  });

  it('can return a list of legal moves', function() {
    game.importPosition({
      '3,0': new General('red'), 
      '4,9': new General('black')
    });

    expect(game.legalMoves['3,0'].length).toBe(1);
  });

  it('replaces attacked pieces when checking move legality', function() {
    game.isCheckmate;
    expect(game.position['1,9']).toBeDefined();
  });

  it('knows if the position is checkmate', function() {
    game.importPosition({
      '3,0': new General('red'), 
      '4,9': new General('black'),
      '2,1': new Soldier('black')
    });

    expect(game.isCheckmate).toBeTruthy();
  });
});
