var bcrypt = require('bcrypt-nodejs');


var hash1 = bcrypt.hashSync('bacon');
var hash2 = bcrypt.hashSync('bacon');
// var hash3 = bcrypt.hashSync('pork');
console.log(hash1);
console.log(hash2);
// console.log(hash3);

console.log(bcrypt.compareSync('bacon', hash1));
console.log(bcrypt.compareSync('bacon', hash2));


console.log(bcrypt.compareSync('pigs', hash1));
console.log(bcrypt.compareSync('pigs', hash2));
