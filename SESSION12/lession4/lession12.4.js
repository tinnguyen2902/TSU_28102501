let soBaiTap = Number(prompt("Nhập số bài tập:"));
if (soBaiTap === 1){
    for (let i=1 ; i<=100 ; i++){
    console.log(i); 
    if (i === 99){
    alert("Đã xong");
    }
}   
}
else if (soBaiTap === 2){
    let nhietDo = Number(prompt("Nhập nhiệt độ hiện tại:"));
    while (nhietDo > 100 || nhietDo < 20){
        if (nhietDo > 100){
           console.log("Nhiệt độ quá cao !!! Yêu cầu giảm nhiệt độ");
           break;
        }      
        if (nhietDo < 20){
            console.log("Nhiệt độ quá thấp !!! Yêu cầu tăng nhiệt độ");
            break;
        }       
    }
    if(nhietDo >= 20 && nhietDo <= 100){
        console.log("Nhiệt độ ổn định");
        
    }
}
else if (soBaiTap === 3){
    let so1 = 0 ;
    console.log(so1);
    let so2 = 1 ;
    console.log(so2);
    let sott = so1+ so2 ;
    for (let i=2 ; i <20; i++){
        let sott = so1+ so2 ;  //tinh so tiếp theo
        console.log(sott);     // in ra
        so1 = so2 ;           //gán lại
        so2 = sott ;         //gán lại
    }
}
else if (soBaiTap === 4){
    let so1 = 0;
    let so2 = 1;
    let sott = so1 + so2;
    while (sott % 5 !== 0) {
        sott= so1 + so2
        so1 = so2 ;
        so2 = sott;  
    } 
     console.log(`Số đầu tiên trong dãy fibonacci chia hết cho 5 là ${sott}`);
}
else if (soBaiTap === 5){
    let so1 = 0;
    let so2 = 1;
    let sum = so1 + so2;
    for (let i =3; i<=20; i++){
    let  sott = so1 + so2 ;
    sum = sum +sott ;
    so1 = so2 ;
    so2 = sott ;  
}
console.log(`Tổng 20 số đầu trong dãy fibonacci là ${sum}`);
}
else if (soBaiTap === 6){
    let sum = 0;
    for (let i = 1; i<=30 ; i++){
    sum = sum + i*7 
}
console.log(`Tổng 30 số đầu chi hết cho 7 là ${sum}`);
}
else if (soBaiTap === 7){
for (let i=1 ; i<=100 ; i++){
    if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
    } else if (i % 3 === 0){
    console.log("fuzz");
    } else if (i % 5 === 0){
    console.log("Buzz");
    } else {
        console.log(i);
    }
}
}
else {
    console.log("Bài tập chưa tích hợp");    
}