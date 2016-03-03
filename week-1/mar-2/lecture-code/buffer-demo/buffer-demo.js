'use strict';

var helloBuf = new Buffer('hello world');
console.log('helloBuf           : ', helloBuf);
console.log('helloBuf.lengh     : ', helloBuf.length);

console.log('\n ---- buffers and strings -----');
console.log('helloBuf.toSting()            : ', helloBuf.toString());
console.log('helloBuf.toSting("utf8", 6)   : ', helloBuf.toString('utf8', 6));
console.log('helloBuf.toSting("hex")       : ', helloBuf.toString('hex'));
helloBuf.write('slugs', 6);
console.log('helloBuf.write("slugs", 6)');
console.log('helloBuf.toString()           : ', helloBuf.toString());

console.log('\n ---- buffers and numbers -----');
console.log('helloBuf.readUInt8()          : ', helloBuf.readUInt8());
console.log('helloBuf.readUInt16LE()       : ', helloBuf.readUInt16LE());
