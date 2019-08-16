('use strict');


array = [1,3,5,7,9,11,12,13];
console.log(array);

for (var i = 0; i < (array.length / 2); i++) {
  var firstHalf = array[i];
  console.log(firstHalf);
  array[i] = array[array.length - i - 1];
  array[array.length - i - 1] = firstHalf;
}
console.log(array);
console.log('//////////////////////////////////////////////')
array2 = ['a','b','c','d','e','f','g'];
console.log(array2);

for (var i = 0; i < (array2.length / 2); i++) {
  var firstHalf = array2[i];
  console.log(firstHalf);
  array2[i] = array2[array2.length - i - 1];
  array2[array2.length - i - 1] = firstHalf;
}
console.log(array2);
console.log('//////////////////////////////////////////////')
array2 = ['a',{},'c',[],'e','f',1];
console.log(array2);

for (var i = 0; i < (array2.length / 2); i++) {
  var firstHalf = array2[i];
  console.log(firstHalf);
  array2[i] = array2[array2.length - i - 1];
  array2[array2.length - i - 1] = firstHalf;
}
console.log(array2);
console.log('//////////////////////////////////////////////')
array2 = [];
console.log(array2);

for (var i = 0; i < (array2.length / 2); i++) {
  var firstHalf = array2[i];
  console.log(firstHalf);
  array2[i] = array2[array2.length - i - 1];
  array2[array2.length - i - 1] = firstHalf;
}
console.log(array2);