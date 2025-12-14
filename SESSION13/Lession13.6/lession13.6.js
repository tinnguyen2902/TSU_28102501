let arr = [12,12,32,4,21,32,21,31,1,53,13,12];
let number = Number(prompt("Nhập số cần kiểm tra:"));
let const1 = 0;
for (let i=0;i<=arr.length;i++){
    if(arr[i]===number){
const1 ++;
    }  
    }
console.log(`Số ${number} xuất hiện ${const1} lần trong dãy số`);
