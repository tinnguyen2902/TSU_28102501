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
  let n =5;
let sao ="";
for (let i=1; i<=n;i++){
   sao = sao + "*"
   console.log(sao); 
}
for (let i = n; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }
    for (let k = 1; k <= i; k++) {
        line += "*";
    }
    console.log(line);
}
for (let i = 1; i <= n; i++) {
    let line = "";
    
    // khoảng trắng đầu dòng
    for (let j = 1; j < i; j++) {
        line += " ";
    }
    
    // sao giảm dần
    for (let k = n - i + 1; k >= 1; k--) {
        line += "*";
    }

    console.log(line);
}

  
  
// bai 4    
}else if (soBaiTap ===4 ){
let width2 = 10;
let height2 = 5;
let i = 1;

while (i<= height2) {
    let line = "";

    if (i === 1 || i === height2) {
        let col = 1;
        while (col <= width2) {
            line += "*";
            col++;
        }
    } else {
        line = "*" + " ".repeat(width2 - 2) + "*";
    }
    console.log(line);
    i++;
}
// bai 5
}else if (soBaiTap === 5) {
 let soTien = Number(prompt("Nhập số tiền mượn:"));
let soThang = Number(prompt("Nhập số tháng mượn tiền:"));
let lai = Number(prompt("Nhập số phần trăm lãi một năm:"));
// 1. Tính lãi suất hàng tháng dưới dạng số thập phân (Ví dụ: 12% -> 0.01 hàng tháng)
let laiSuatHangThang = (lai / 100) / 12; 
// 2. Tính tổng số tiền cuối cùng phải trả bằng công thức lãi kép
// Math.pow(cơ số, số mũ)
let tongTienCuoiCung = soTien * Math.pow((1 + laiSuatHangThang), soThang);
// 3. In kết quả ra console, làm tròn đến 2 chữ số thập phân
console.log(`Số tiền cuối cùng sau ${soThang} tháng là: ${tongTienCuoiCung.toFixed(2)} VND`);

}else {
    console.log("Bài chưa được tích hợp!!!");    
}