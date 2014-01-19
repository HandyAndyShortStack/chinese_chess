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
    console.log(err);
    console.log('concatonation complete')
  }
});

new compressor.minify({
  type: 'yui-js',
  fileIn: includedFiles,
  fileOut: 'chinese_chess.min.js',
  callback: function(err, min){
    console.log(err);
    console.log('minification complete');
  }
});
