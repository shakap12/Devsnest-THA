console.log(' a JavaScript function to check whether an `input` is an array or not');

function array_check(data) {
    return Array.isArray(data);
}

console.log(array_check('w3schools'));
console.log(array_check([1, 2, 3, 4]));

console.log(' a JavaScript function to clone an array');

const arrCopy = [];
function array_Clone(arr) {
    for (i = 0; i < arr.length; i++) {
        arrCopy[i] = arr[i];
    }
    return arrCopy;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log(' a JavaScript function to get the first element of an array. Passing a parameter n will return the first n elements of the array.');

const arr1 = [];
function first(arr, index) {
    if (index >= 0) {
        return (arr.slice(0, index));
    }
    else if (!index) {
        return arr[0];
    }
    else {
        return [];
    }

}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

console.log('a simple JavaScript program to join all elements of the following array into a string.');

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join());
console.log(myColor.join('+'));

console.log(' a JavaScript program to find the most frequent item of an array');

var arr12 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var max = 0,ele,count;

for (i = 0; i < arr12.length; i++) 
{
  count = 0;
  for ( j = i; j < arr12.length; j++) 
  {
    if (arr12[i]===arr12[j])
    {
      count++;
    }
    if (count > max) 
    {
      max= count;
      ele = arr12[i];
    }
  }
}

console.log(ele, "(", max, "times )");




