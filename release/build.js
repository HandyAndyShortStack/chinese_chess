var compressor = require('node-minify');
var fs = require('fs');

var includedFiles = fs.readdirSync('../src').map(function(fileName) {
  return '../src/' + fileName;
});

new compressor.minify({
  type: 'no-compress',
  fileIn: includedFiles,
  fileOut: 'chinese_chess.js',
  callback: function(err, min){
    err ? console.log(err) : console.log('concatenation complete')
  }
});
