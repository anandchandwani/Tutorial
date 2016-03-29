function countTwos(num) {
  var count = 0;
  var str = String(num);
  for (var i = 2; i <= num; i++) {
    var subStr = String(i);
    for (var j = 0; j < str.length; j++) {
      if (subStr[j] === '2')
        count++;
    }
  }
  return count;
}

console.log(countTwos(100));

// 278 characters typed (not including comment)
