(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var andy, hypotenuse, lol, square;

square = function(num) {
  return num * num;
};

console.log(square(20));

hypotenuse = function(a, b) {
  var squared;
  squared = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(squared);
};

console.log(hypotenuse(3, 4));

if (true || false) {
  console.log('foo');
  console.log('bar');
}

if (true === false || true && false) {
  console.log('I am invisible');
}

if (2 > 1) {
  console.log('baz');
}

if ((2 > 1 && 1 > 0)) {
  console.log('oof');
}

andy = {
  name: 'andy',
  age: 24,
  bday: Date.now()
};

console.log(andy.bday);

lol = void 0;

if (lol == null) {
  lol = 'very funny';
}

console.log(lol);

if (lol == null) {
  lol = 'not so funny anymore';
}

console.log(lol);

console.log(Math.floor(10 / 3));

},{}]},{},[1]);
