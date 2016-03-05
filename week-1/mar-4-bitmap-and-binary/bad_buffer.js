var secret = new Buffer(process.env.SECRET);
secret = null;

while(true) {
  var buf = new Buffer(32);
  console.log(buf.toString());
  if (buf.toString().indexOf('salmons') !== -1)
    return console.log('we got it!');
}
