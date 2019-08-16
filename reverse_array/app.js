('use strict');

array = [1,3,5,7,9,11];
console.log(array);

for (var i = 0; i < (array.length / 2); i++) {
  var firstHalf = array[i];
  console.log(firstHalf);
  array[i] = array[array.length - i - 1];
  array[array.length - i - 1] = firstHalf;
}
console.log(array);