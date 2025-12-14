let lession = Number(prompt("Nhập số bài tập muốn thực hiện:"));
if (lession === 1){
    //b1
    const numbers = [2,5,7,3,54,76,24,564,12,35];
    let count = 0;
    let result = [];
    for (let i =0 ; i< numbers.length; i++){
    if (numbers[i]>=10){
        count++;
        result.push(numbers[i]);
    }
}
console.log(`Các số lớn hơn 10 là ${result}`);
console.log(`Số lượng số lớn hơn 10 là ${count}`);
}else if (lession === 2){
//b2
const numbers = [2,5,7,3,54,76,24,564,12,35];
let max = 0;
for (let i =0 ; i< numbers.length; i++){
    if (numbers[i]>= max){
        max = numbers[i];
        maxIndex = i;
    }
}
console.log(`Giá trị lớn nhất trong dãy số là:${max}`);
console.log(`Vị trí max là : ${maxIndex}`);
}else if (lession === 3){
 //b3   
   const numbers = [2,5,7,3,54,76,24,564,12,35];
   let max = numbers[0];
   let sum = 0;
  for (let i =0 ; i< numbers.length; i++){
    sum += numbers[i];
    if (numbers[i]>= max){
    max = numbers[i];
    }
}
let average = sum/numbers.length;
console.log(`Giá trị lớn nhất trong dãy số là:${max}`);
console.log(`Giá trị trung bình của dãy số là : ${average}`);
}else if (lession === 4){
 //b4   
  const numbers = [2,5,7,3,54,76,24,564,12,35];
  console.log(`Dãy số trước khi đảo ngược: ${numbers}`);
  let newNumbers = numbers.reverse();
  console.log(`Dãy số sau khi đảo ngược: ${newNumbers}`);
}else if (lession === 5){
 //b5   
   const numbers = [2,-5,7,3,-54,-76,24,564,-12,35];
   let count = 0 ;
   let result = [];
   for ( let i=0; i<numbers.length; i++){
    if (numbers[i] < 0){
        count++;
        result.push(numbers[i]);
    }
}
console.log(`Số lượng số âm là : ${count}`);
console.log(`Các số nguyên âm là: ${result}`);
}else if (lession === 6){
 //b6   
   const numbers = [ 12,3,2,4,2,44,-43,232,43,21,34,56,76,64];
   let check = Number(prompt("Nhập số cần check:"));
   let checkNumbers = numbers.includes(check);
   if (checkNumbers){
    console.log(`Number ${check} is in the array`);
   }else {
    console.log(`Number ${check} is not in the array`);
   }
}else if (lession === 7){
  //b7  
  const numbers = [ 12,3,2,4,2,44,-43,232,43,21,34,56,76,64];
  console.log(`Dãy số trước khi sắp xếp: ${numbers}`);
  let newNumbers = numbers.sort(function(a,b){
    return b-a ;
  });
  console.log(`Dãy số sau khi sắp xếp: ${newNumbers}`);
}else if (lession === 8){
  //b8
  const numbersa = [ 12,3,2,4,2,44,-43,232,43,21,34,56,76,64];
  console.log(`Mảng a gồm : ${numbersa}`);
  const numbersb = [-12,43,2,1,4,2,4,4,5,6,66,44,33,88,98];
  console.log(`Mảng b gồm : ${numbersb}`);
  const numbersc = numbersa.concat(numbersb);
  console.log(`Nối a với b thành c: ${numbersc}`); 
} else {
    console.log("Bài tập chưa tích hợp:");
}