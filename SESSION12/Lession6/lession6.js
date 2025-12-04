let so_a = Number(prompt("Nhap so a:"));
let so_b = Number(prompt("Nhap so b:"));
let phep_tinh = prompt("Nhap phep tinh can thuc hien:");
if (phep_tinh === "+"){
console.log(`tong cua ${so_a} + ${so_b} la ${ so_a + so_b }`);
} else if (phep_tinh === "-") {
console.log(`Hieu cua ${so_a} - ${so_b} la: ${ so_a - so_b}`)
} else if (phep_tinh === "/") {
console.log(`Thuong cua ${so_a} / ${so_b} la: ${ so_a / so_b }`)
} else if (phep_tinh === "*") {
console.log(`Tich cua ${so_a} * ${so_b} la: ${ so_a * so_b}`)       
} else{
  alert("So khong thich hop !!!");
}
   

   