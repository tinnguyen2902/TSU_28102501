// all
let baiTap = Number(prompt("Nhập số bài tập:"));
// bai 1
if (baiTap === 1 ){
let doF = Number(prompt("Nhập độ F cần quy đổi:"));
const doC = (5*(doF-32))/9
console.log(`${doF} độ F bằng ${doC} độ C`);
}
// bai 2
else if (baiTap === 2) {
let met = Number(prompt("Nhập số met cần quy đổi:"));
const feel = met*3.281
console.log(`${met} met bằng ${feel} feel`);   
}
// bai 3
else if (baiTap === 3) {
let chieuDai = Number(prompt("Nhập chiều dài hình vuông:"));
const dienTich = chieuDai*chieuDai 
console.log(`Với chiều dài ${chieuDai} thì diện tích hình vuông bằng ${dienTich}`);
}
// bai 4
else if (baiTap === 4) {
let chieuDai = Number(prompt("Nhập chiều dài hình chữ nhật:"));
let chieuRong = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
const dienTich = chieuDai*chieuRong 
console.log(`Diện tích hình chữ nhật là: ${dienTich}`);
}
// bai 5
else if (baiTap === 5){
let chieuDaiA = Number(prompt( "Nhập chiều dài cạnh a:" ));
let chieuDaiB = Number(prompt( "Nhập chiều dài cạnh b:" ));
const dienTich = chieuDaiA * chieuDaiB * 0.5 
console.log(`Diện tích tam giác vuông bằng ${dienTich} với chiều dài 2 cạnh a,b lần lượt là: ${chieuDaiA}, ${chieuDaiB} `);
}
// bai 6
else if (baiTap === 6){
let soA = Number(prompt("Nhập số a:"));
let soB = Number(prompt("Nhập số b:"));
const giaTri = -soB/soA
console.log(`Giá trị x của biểu thức ax+b=0 là ${giaTri}`);
}
// bai 7
else if (baiTap === 7){
let soA = Number(prompt("Nhập số a"));
let soB = Number(prompt("Nhập số b"));
let soC = Number(prompt("Nhập số c"));
if (soA === 0){
    console.log("Đây không phải phuơng trình bậc 2, quay lại bài 6 để thực hiện!!!");
} else if ( soA !== 0){
    delTa = soB*soB -4*soA*soC 
    if (delTa < 0){
        console.log("Phương trình vô nghiệm");
    } else if (delTa === 0 ){
        ketQua = -soB /(2*soA)
        console.log(`kết quả là ${ketQua} `)
    } else if (delTa > 0){
        ketQua1 = (-soB + Math.sqrt(delTa))/(2*soA)
        ketQua2 = (-soB - Math.sqrt(delTa))/(2*soA)
        console.log(`Nghiệm thứ nhất của phương trình là ${ketQua1}`);
        console.log(`Nghiệm thứ hai của phương trình là ${ketQua2}`);
    }  
}
}
else if (baiTap === 8){
    let age = Number(prompt("Nhập số tuổi cần kiểm tra:"));
    if (age % 1 === 0 && age >= 0 && age <= 120 ){
        console.log(`${ age } chính là số tuổi của người`);   
    } else {
        console.log(`${age} không phải là số tuổi của người`);
    }
}
// close    
else {
    console.log("Bài tập chưa được tích hợp!!!");  
}