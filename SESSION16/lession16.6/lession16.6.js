const arr1 = [1,2,3,4,6,5,6];
let sum1 = sum(arr1);
console.log(sum1);

const arr2 = [10,20,50,30,60];
let sum2 = sum(arr2);
console.log(sum2);

const arr3 = [1,3,5,7,9,11];
let sum3 = sum(arr3);
console.log(sum3);


function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
   } 
  return sum;
}


