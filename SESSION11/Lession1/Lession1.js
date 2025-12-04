let soNam = Number(prompt("Nhap so nam ban muon kiem tra:"));
if (soNam % 400 ===0 && soNam %100 ===0){   //  Neu 
    alert( `${soNam} la nam nhuan`) ;  
} else{.                                     // con khong
    alert(`${soNam} khong phai la nam nhuan`);
} 