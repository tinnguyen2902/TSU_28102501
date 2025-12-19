let arr1 = [3, 6, 1, 8, -3, 7, 8];
let min1 = min(arr1);
console.log(min1);

let arr2 = [7, 12, 6, 1, 8, 7, 8];
let min2 = min(arr2);
console.log(min2);

let arr3 = [];
let min3 = min(arr3);
console.log(min3);

let arr4 = [0,0,0,0]
let min4 = min(arr4);
console.log(min4);

//tao ham de luu vao do
function min(arr) {
  let minValue = arr[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue
}
