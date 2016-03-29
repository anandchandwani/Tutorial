var demoNums = [2, 6, 3, 19, 5, 7];
var sortedNums = [2, 3, 5, 6, 7, 19];

function maxDifference1(nums) {
  var n = nums.length;
  var max = 0, diff;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      diff = Math.abs(nums[i] - nums[j]);
      max = Math.max(max, diff);
    }
  }
  return max;
}


function maxDifference2(nums) {
  var n = nums.length;
  var max = nums[0], min = max;
  for (var i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  return max - min;
}


function maxDifference3(nums) {
  return nums[nums.length - 1] - nums[0];
}

function makeArr(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = i;
  }
  return arr;
}



var sizes = [];
for (var i = 1; i <= 10000; i += 500) {
  sizes.push(makeArr(i));
}


sizes.forEach(function(size) {
  console.time('size ' + size.length);
  maxDifference1(size);
  console.timeEnd('size ' + size.length);
});




function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}


function binarySearch(arr, val) {
  function divide(start, end) {
    var mid = Math.floor((end + start) / 2);
    if (mid < start)      return -1;
    if (arr[mid] === val) return mid;
    if (arr[mid] > val)   end = mid - 1;
    else                  start = mid + 1;
    return divide(start, end);
  }
  return divide(0, arr.length - 1);
}


sizes.forEach(function(size) {
  console.time('size ' + size.length);
  binarySearch(size, 983450394875);
  console.timeEnd('size ' + size.length);
});


// console.log(binarySearch(sortedNums, 2));
// console.log(binarySearch(sortedNums, 3));
// console.log(binarySearch(sortedNums, 5));
// console.log(binarySearch(sortedNums, 6));
// console.log(binarySearch(sortedNums, 7));
// console.log(binarySearch(sortedNums, 19));
// console.log(binarySearch(sortedNums, 1));
// console.log(binarySearch(sortedNums, 100));
// console.log(binarySearch(sortedNums, 10));
