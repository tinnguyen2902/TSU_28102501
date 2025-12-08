let so = Number(prompt("Nhập vào một số dương bất kì:"));
let tach = String(so).split("");
let max = Number(tach[0]);
for (let i=1 ; i< tach.length;i++) {
    let number = Number(tach[i]);
    if (number > max){
        max = number;
    }
}
alert(`Số lớn nhất là ${max}`)
