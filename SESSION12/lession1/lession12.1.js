let soBaiTap = Number(prompt("Nhap so bai tap ban muon lam:"));

if (soBaiTap === 1 ){
// bai 1    
   let numberOne = Number(prompt("Nhap so thu nhat:"));
   let numberTwo = Number(prompt("Nhap so thu hai:"));
    const ketQua = numberOne%numberTwo 
    if (ketQua === 0){
        console.log(`${numberOne} chia het cho ${numberTwo}`);
    }else {
        console.log(`${numberOne} khong chia het cho ${numberTwo}`);
    }
}  
// bai 2
else if (soBaiTap === 2 ){
    let age = Number(prompt("Nhap so tuoi cua ban:"));
    if (age >= 15){
    console.log("Ban du dien kien de vao hoc lop 10");
     } else {
    console.log(`${age} la so tuoi cua ban chua du dieu kien de hoc lop 10`)
     }
    }
//  bai 3    
else if (soBaiTap === 3 ){
    let checkNumber = Number(prompt("Nhap vao so can kiem tra:"));
    if (checkNumber === 0){
    console.log("so ban nhap chinh la 0");
    }else if (checkNumber > 0){
    console.log(`${checkNumber} lon hon 0`);   
    } else {
    console.log(`${checkNumber} nho hon 0`);
}
} 
// bai 4
else if (soBaiTap === 4){
    let a = Number(prompt("Nhap so thu nhat:"));
    let b = Number(prompt("Nhap so thu hai:"));
    let c = Number(prompt("Nhap so thu ba:"));
    let max = a;
    if ( b >= max ){
    max = b;
    }
    if (c >= max){
    max = c;
    }
console.log(`So lon nhat la : ${max}`);
}
// bai 5
else if (soBaiTap === 5){
let diemGiuaKi = Number(prompt("Nhap so diem giua ki:"));
let diemCuoiKi = Number(prompt("Nhap so diem cuoi ki:"));
const diemTong = (diemGiuaKi + diemCuoiKi)/2
if (diemTong >= 9) {
    console.log("Xuat Xac");
} else if (diemTong <9 && diemTong >=8){
    console.log("Gioi");
} else if (diemTong <8 && diemTong >=6) {
    console.log("Kha");
} else if (diemTong <6 && diemTong >=4) {
    console.log("Trung Binh");
} else if (diemTong<4) {
    console.log("Yeu");
}
}
else {
    console.log("Bai tap chua duoc tich hop")
}
