let soNguyen1 = [ 2,4,5,6,3,7,2,4,1,1,3,8,9,4];
let soNguyen2 = [1,4,3,6,7,8,9,7,3,2,5,6];
let newArr = soNguyen1.concat(soNguyen2);
let sum = 0;
console.log(newArr);
for (let i =1;i< newArr.length;i++){
    if(newArr[i]%2!==0){
     sum= sum + newArr[i];
    }
}
 alert(`Tổng của các số lễ trong mảng là : ${sum}`);
 let sum1 = 0;
 for (let i=1;i< newArr.length;i++){
    if(newArr[i] % 2 === 0){
        sum1 += newArr[i];
    }
 }
alert(`Tổng của các số chẵn trong mảng là :${sum1}`);