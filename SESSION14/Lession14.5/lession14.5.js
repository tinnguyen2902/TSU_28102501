let studentList = [
{
        id : 1,
        userName : "Nguyễn Văn A",
        age : 23,
    },{
        id : 2,
        userName : "Lê Thị D",
        age : 24,
    },{
        id : 3,
        userName : "Đinh Văn M",
        age : 18
    },{
        id : 4,
        userName : "Trần Văn R",
        age : 21
    }
]
 while (true) {
    let option = Number(prompt("Nhập cú pháp 1,2,3 để thực hiện chức năng"));
if (option === 1){
    //Thêm
    let id = prompt("Nhập id:")
    let userName = prompt("Nhập tên cần thêm:");
    let age = prompt(`Nhập tuổi của ${userName}`);
    let contact = {
        id : id,
        userName : userName,
        age : age,
    }
    studentList.push(contact); //thêm vào 
    displayContact (); //Gọi từ dưới lên
    }
else if (option === 2){
    //Hiển thị
    displayContact();
}
else if (option ===3){
    //Xoá
    //tìm
    let id = Number(prompt("Nhập id cần xoá:"));
    let index = studentList.findIndex(function (el) {
        return el.id === id;
    });
    if (index === -1){
       console.log("Id không tồn tại");
    } else {
        studentList.splice(index,1);
        displayContact (); 
    }
    //cần học thêm về function và đoạn này 
}else if (option === 4){
    //Thoát
    console.log("Thoát");
    break;
} else {
    console.log("Nội dung không hợp lệ");
}
 }
// tạo một displayContact để khi dùng thì gọi
function displayContact () {
  console.log("Danh sách học sinh");
    //in ra
     for (let student in studentList){
     console.log("id",studentList[student].id);
     console.log("userName:", studentList[student].userName);
     console.log("age:", studentList[student].age);
     console.log("=================");
}
}