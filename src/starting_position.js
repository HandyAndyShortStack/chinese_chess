var Position = require('./position.js');
var Chariot = require('./chariot.js');
var Horse = require('./horse.js');
var Elephant = require('./elephant.js');
var Advisor = require('./advisor.js');
var General = require('./general.js');
var Cannon = require('./cannon.js');
var Soldier = require('./soldier.js');
module.exports = StartingPosition;

function StartingPosition() {
  var self = new Position();

  self.place(new Chariot('red'), [0, 0])
    .place(new Horse('red'), [1, 0])
    .place(new Elephant('red'), [2, 0])
    .place(new Advisor('red'), [3, 0])
    .place(new General('red'), [4, 0])
    .place(new Advisor('red'), [5, 0])
    .place(new Elephant('red'), [6, 0])
    .place(new Horse('red'), [7, 0])
    .place(new Chariot('red'), [8, 0])
    .place(new Cannon('red'), [1, 2])
    .place(new Cannon('red'), [7, 2])
    .place(new Soldier('red'), [0, 3])
    .place(new Soldier('red'), [2, 3])
    .place(new Soldier('red'), [4, 3])
    .place(new Soldier('red'), [6, 3])
    .place(new Soldier('red'), [8, 3])
    .place(new Chariot('black'), [0, 9])
    .place(new Horse('black'), [1, 9])
    .place(new Elephant('black'), [2, 9])
    .place(new Advisor('black'), [3, 9])
    .place(new General('black'), [4, 9])
    .place(new Advisor('black'), [5, 9])
    .place(new Elephant('black'), [6, 9])
    .place(new Horse('black'), [7, 9])
    .place(new Chariot('black'), [8, 9])
    .place(new Cannon('black'), [1, 7])
    .place(new Cannon('black'), [7, 7])
    .place(new Soldier('black'), [0, 6])
    .place(new Soldier('black'), [2, 6])
    .place(new Soldier('black'), [4, 6])
    .place(new Soldier('black'), [6, 6])
    .place(new Soldier('black'), [8, 6]);

  self.toMove = 'red';

  return self;
}
