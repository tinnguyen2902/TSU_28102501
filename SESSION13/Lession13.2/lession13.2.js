let numberLucky = [
    1,5,67,28,12
];
let numberGuest = Number(prompt("Nhập con số của bạn:"));
if (numberLucky.includes (numberGuest)){
    console.log("bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");   
}