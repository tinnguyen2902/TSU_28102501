// hoi tuoi
let tuoi = Number(prompt("Nhap so tuoi"));
// neu tren 20
if (tuoi >= 20 ){
let canNang = Number(prompt("Nhap can nang cua ban theo kg:"));
let chieuCao = Number(prompt("Nhap chieu cao cua ban theo m:"));
let BMI = canNang / (chieuCao * chieuCao);
if ( BMI < 18.5){
    console.log("Gay");
} else if (BMI >= 18.5 && BMI < 24.9) {
    console.log("Binh thuong")
}else if (BMI >= 24.9 && BMI <= 25) {
    console.log("Thua can")
}else if (BMI > 25 && BMI <= 29.9 ) {
    console.log("Tien beo phi")
}else if (BMI >= 30 && BMI < 34.9) {
    console.log("Beo phi do 1")
}else if (BMI >= 35 && BMI < 39.9 ) {
    console.log("Beo phi do 2")
}else if (BMI >= 40 ) {
    console.log("Beo phi do 3")
}
} else{
  alert("Ban khong dap ung du dieu kien !!!");
}
