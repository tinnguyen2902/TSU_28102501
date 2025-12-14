let bookList = [
    {
        ID : 01,
        Name : "Nhà Giả Kim",
        author : "Paulo Coelho",
        year : 2020,
    },
     {
        ID : 02,
        Name : "Đắc Nhân Tâm" ,
        author : "Dale Carnegie",
        year : 2021,
    },
     {
        ID : 03,
        Name : "Đọc vị bất kì ai" ,
        author : "David J. Lieberman",
        year : 2019,
    },
     {
        ID : 04,
        Name : "Cà phê cùng Tony" ,
        author : "Tony Buổi Sáng",
        year : 2024,
    },
]
while (true){
let option = Number(prompt("Nhập cú pháp cần thao tác:"));
if (option ===1){
//Thêm mới
  let ID = Number(prompt("Nhập ID:"));
  let Name = prompt("Nhập tên sách:");
  let author = prompt("Nhập tên tác giả:");
  let year = prompt("Nhập năm xuất bản:");
  let contact = {
    ID : ID,
    Name : Name,
    author : author,
    year :  year,
  }
  bookList.push(contact);
  displayContact();
}else if (option ===2){
//Hiển thị
  displayContact();
}else if (option ===3){
 //Tìm kiếm theo tên   
  let keyword = prompt("Nhập tên sách bạn muốn tìm:");
  findByName(keyword);
}else if (option === 4){
    //Xoá theo ID
    let ID = Number(prompt("Nhập ID cần xoá"));
    let index = bookList.findIndex(function (el) {
        return el.ID === ID;
        });
        if (index === -1){
       console.log("Id không tồn tại");
    } else {
        bookList.splice(index,1);
        displayContact (); 
    }
}else if (option === 5){
//Thoát
     console.log("Thoát");
     break;
}else {
    console.log("Xin mời nhập lại từ 1 đến 5");   
}
}

//in lại
function displayContact () {
    console.log("Book List");
    for (let book in bookList){
        console.log("ID",bookList[book].ID);
        console.log("Name",bookList[book].Name);
        console.log("author",bookList[book].author);
        console.log("year",bookList[book].year);
        console.log("==================");
    }
}
// tìm kiếm
function findByName(keyword) {
    let key = keyword.trim().toLowerCase();
    let result = bookList.filter(el => el.Name.toLowerCase().includes(key)); //Cần học thêm đoạn này
    if (result.length === 0){
        console.log("Không tìm thấy kết qủa !!!"); 
    } else {
        console.table(result);
    }
}
