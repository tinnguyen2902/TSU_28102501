
let userName = "";
let age = 0;
while (true){
    let option = Number(prompt("Nhập lựa chọn"));
if (option === 1){
    
    userName = prompt("Nhập tên của bạn:")
    console.log(`Tên của bạn là ${userName}`);
} else if (option === 2){
    age = prompt("Nhập tuổi của bạn");
    console.log(`Tuổi của bạn là:${age}`);
} else if (option === 3){
    console.log(`${age}, ${userName}`);
}else if (option === 4){
    let number = Number(prompt("Nhập số:"));
    for (let i =1 ;i<=10;i++){
    let bangCC = number*i;
    console.log(`${number} X ${i} = ${bangCC}`);
}
}else if (option===5){
    let check = Number(prompt("Nhập số cần kiểm tra"));
    if (check % 2 === 0){
    console.log(`${check} chia hết cho 2`);
     }else {
     console.log(`${check}không chia hết cho 2`);
    }
}else if (option === 6) {
    let n=Number(prompt("Nhập số n:"));
    let sum=0;
    for (let i=1;i<=n;i++){
     sum=sum+i; 
}
 console.log(`Tổng của n số là ${sum}`);
}else if (option === 7){
    let text = prompt("Nhập dãn cần tách");
let tach = text.split("");
console.log(`kết quả sau khi ${tach}`);
}else if (option ===8){
    while (true){
    let a = Number(prompt("Nhập số cần kiểm tra:"));
    while (!Number.isInteger(a)|| a<= 0){
        alert("Giá trị không hợp lệ");
    }
    alert(`${a} hợp lệ`);
    let prime = true ;
    for (let i = 2;i<a;i++){
        if (a % i === 0){
            prime = false;
            break;
        }else if (prime = true){
            console.log(`${a}là số nguyên tố`);
        }else {
            console.log(`${a} không là số nguyên tố`);  
        }
    }
    let answer = prompt("bạn có muốn tiếp tục không:")
    if (answer === "No" ){
        break;
    }
}
}else if(option ===9){
    let text = prompt("Nhập chuổi cần đảo ngược:");
    let answer = text.split("").reverse();  //phải tách rồi mới đảo được
    console.log(answer);
}else if ( option === 10){
    console.log("Thoát");  
    break ;
}
}
