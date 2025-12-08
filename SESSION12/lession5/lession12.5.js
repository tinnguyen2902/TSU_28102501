let soBaiTap = Number(prompt("Nhập số bài tập: "));
if (soBaiTap === 1){
 let number = Number(prompt("Nhập số cần tính;"));  
 let so1 = 0 ;
 let so2 = 1 ;
 let sott = so1+ so2 ;
 for ( let i= 0 ; i<= number ; i++){
    sott = so1 + so2;               //tính số tiếp theo
    so1 = so2
    so2 = sott
    console.log(`${sott}`);
  }
//   bai 2
}else if (soBaiTap ===2 ){
let number = Number(prompt("Nhập số cần tính"));
let giaiThua = 1 ;
for (let i = 1 ; i<= number ; i++){
    giaiThua = giaiThua*i
}
console.log(`${giaiThua}`) 
// bai 3
}else if (soBaiTap ===3 ){

// bai 4    
}else if (soBaiTap ===4 ){

// bai 5
}else if (soBaiTap ===5 ){    
   let soTien = Number(prompt("Nhập số tiền mượn:"));
   let soThang = Number(prompt("Nhập số tháng mượn tiền:"));
   let lai = Number(prompt("Nhập số phần trăm lãi một năm:"));
   const = 
}else {
    console.log("Bài chưa được tích hợp!!!");    
}