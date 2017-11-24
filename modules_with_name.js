
 exports.PI = 3.141592;

 var _sqrt (s, x, last){
    x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
 };
 exports.sqrt (s){
    _sqrt(s, s/2.0, 0.0);
 };
 exports.square (x) {
    x * x;
 };






var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./Math').PI;
var sqrt = require('./Math').sqrt;
var square = require('./Math').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));