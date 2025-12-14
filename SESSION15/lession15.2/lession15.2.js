let lession = Number(prompt("Nhập số bài tập:"));
if (lession === 1){
    //bt1
    let menu = ["cơm","bún","mỳ","bánh tráng miệng"];
    console.log(`Menu trước khi thay đổi : ${menu}`);
    let reverse = menu.reverse();
    console.log(`Menu sau khi thay đổi: ${reverse}`);
}else if (lession === 2){
//bt2
    let menu = [ "cơm",20000, "bún",25000,"mỳ", 23000,"bánh tráng miệng",12000 ];
    let numbers = menu.filter(item => typeof item === "number");
    console.log(`Giá trị number trong dãy là: ${numbers}`);
}else if (lession === 3){
//bt3
    let menu = [ "cơm",20000, "bún",25000,"mỳ", 23000,"bánh tráng miệng",12000 ]; 
    console.log(menu.length);
}else if (lession === 4){
//bt4  
    let arr1 = prompt("Nhập vào chuổi thứ nhất: ")
    let arr2 = prompt("Nhập vào chuổi thứ hai: ")
    if (arr1 === arr2 ){
      console.log("Hai chuổi giống nhau");
    } else {
    console.log("Hai chuổi khác nhau");
}  
}else if (lession === 5){
//bt5  
   let text = prompt("Nhập vào một mảng có kí tự -:");
   let arr = text.split("");
    for (let i = 1 ; i< text.length; i++){
    if (arr[i] === "-"){
     arr[i] = "_";
    }
    }
    let result = arr.join("");
     console.log(result);  
}else {
    console.log("Bài tập chưa được tích hợp");
    
}