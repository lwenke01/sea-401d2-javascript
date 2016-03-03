'use strict';

var fs = require('fs');

fs.readFile('./helloworld.txt', function(err, data){
  if (err) return console.error(err);
  console.log(data.toString());
});

//fs.readFile('./dosnt-exist.txt', function(err, data){
  //if (err) return console.error(err);
  //console.log(data.toString());
//});
