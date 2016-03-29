// "n" will be array length
var arr = [];
for (var i = 0; i < 256; i++) {
  arr[i] = i;
}

// O(1) time
function constant(arr) {
  // array lookups do not depend on length
  return arr[arr.length - 1];
}

// O(1) time
function constantStill(arr) {
  // there is a loop, but it's always 3 loops so it's constant. It doesn't depend on "n"
  for (var i = 0; i < 3; i++) {
    console.log(arr[i]);
  }
}

// O(log n) time
function logarithmic(arr) {
  // number of loops increases by one when "n" is doubled.
  for (var i = arr.length - 1; i > 0; i = Math.floor(i / 2)) {
    console.log(arr[i]);
  }
}


// O(n) time
function linear(arr) {
  // one "for" loop that depends on "n". number of loops doubles when "n" doubles
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// O(n) time
function stillLinear(arr) {
  // one "for" loop that depends on "n"
  for (var i = 0; i < arr.length; i++) {
    // the inner loop is constant, not dependant on "n"
    for (var j = 0; j < 3; j++) {
      console.log(arr[i]);
    }
  }
}

// O(n * log n) time
// the best sorting algorithms are this efficient
// a.k.a. "quasilinear" time
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var mid = Math.floor(arr.length) / 2;  // cuts in half every time (log n)
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  var merged = [];
  var ind1 = 0, ind2 = 0;
  while (left[ind1] !== undefined || right[ind2] !== undefined) {  // depends on "n"
    if (left[ind1] < right[ind2])
      merged.push(left[ind1++]);
    else if (left[ind1] >= right[ind2])
      merged.push(right[ind2++]);
    else
      merged.push(left[ind1++] || right[ind2++]);
  }
  return merged;
}


// O(n^2) time
function quadratic(arr) {
  // nested loops, each depending on "n". therefore n * n which is n squared
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}


// O(3^n) time, a.k.a. exponential time
// this time "n" will be a number. the number of rounds in rps
function rockPaperScissors(num) {
  if (num === 0) return [];

  function rps(num, path) { // three recursive calls. every round multiplies by 3. eg. 4 rounds is 3 * 3 * 3 * 3 which is 3^4. Therefore O(3^n) time
    if (num === 0) {
      return outcomes.push(path);
    }
    rps(num - 1, path.concat('rock'));
    rps(num - 1, path.concat('paper'));
    rps(num - 1, path.concat('scissors'));
  }

  var outcomes = [];
  rps(num, []);
  return outcomes;
}



// O(n!) time, a.k.a. factorial time
// it doesn't get much worse than this
// function that finds all permutations of array
function permutations(arr) {
  var size = arr.length;
  permutationUtil(0);
  function permutationUtil(index) {
    if (index === size) {
      return console.log(arr);
    }

    for (var j = index; j < size; j++) { // this loop runs (n - index) times. since "index" starts at 0 and ends at n, the result is (n)(n-1)(n-2)...(1) which equals n!
      swap(arr, index, j);
      permutationUtil(index + 1);
      swap(arr, index, j);
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
