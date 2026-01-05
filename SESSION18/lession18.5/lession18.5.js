//--DATA
const studentLists = [
  { ID: 1, Name: "Huấn", Age: 18, Class: "A1" },
  { ID: 2, Name: "Cường", Age: 22, Class: "A1" },
];
//--ID tự động
let currentID = Math.max(...studentLists.map((t) => t.ID));
let editID = null; //dung cho chuc nang them moi
//--DOM
const nameIuput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const classInput = document.getElementById("classInput");
const search = document.getElementById("search"); //ô tìm kiếm nên dùng querySelector
const add = document.querySelector("body-button");
const fix = document.querySelector("fix");
const del = document.querySelector("del");
const btnAdd = document.getElementById("add");

//--Hien thi studentsLists ra man hinh
const tableInput = document.getElementById("tableInput");
//---table
function renderTable(list = studentLists) {
  //tr-th
  let HTML = `
 <tr>
     <th>Tên</th>
     <th>Tuổi</th>
     <th>Lớp</th>
     <th colspan = "2" >Hành động</th>
   </tr>
 `;
  //tr-td
  for (let i = 0; i < list.length; i++) {
    let student = list[i];
    HTML += `
  <tr>
    <td>${student.Name}</td>
    <td>${student.Age}</td>
    <td>${student.Class}</td>
    <td><button onclick = "editStudent(${student.ID})" class ="button fix" >Sửa</button></td>
    <td><button onclick = "delStudent(${student.ID})" class ="button del" onclick = "delStudent(${student.ID})" >Xoá</button></td>
  </tr> `;
  }
  tableInput.innerHTML = HTML;
}

//chuc nang them moi

function addStudent(event) {
  if (event) event.preventDefault();
  const newName = nameIuput.value.trim();
  const newAge = ageInput.value.trim();
  const newClass = classInput.value.trim();
  if (newName === "" || newAge === "" || newClass === "") {
    alert("Vui lòng nhật đầy đủ thông tin");
    return;
  }
  //phan nay o chuc nang sua =>them moi
  if (editID === null) {
    currentID++;
    const newStudent = {
      ID: currentID,
      Name: newName,
      Age: Number(newAge), //chuyen age sang so
      Class: newClass,
    };
    studentLists.push(newStudent);
    alert("Đã thêm thành công");
  } else {
    // --- CHẾ ĐỘ CẬP NHẬT (SỬA) ---
    // Tìm vị trí của sinh viên đang sửa trong mảng
    const index = studentLists.findIndex((s) => s.ID === editID);
    if (index !== -1) {
      // Cập nhật giá trị mới
      studentLists[index].Name = newName;
      studentLists[index].Age = Number(newAge);
      studentLists[index].Class = newClass;
      // Sửa xong thì reset trạng thái
      editID = null;
      btnAdd.innerText = "Thêm";
      btnAdd.style.backgroundColor = "";
      // Trả về màu cũ
      alert("Đã cập nhật thành công");
    }
  }
  //reset lại bảng
  nameIuput.value = "";
  ageInput.value = "";
  classInput.value = "";
  renderTable();
}
if (btnAdd) {
  btnAdd.addEventListener("click", addStudent);
}
// Gọi lần đầu để hiển thị
renderTable();
//chuc nang tim kiem
function searchKey() {
  let key = search.value.toLowerCase().trim();
  let ans = [];
  for (let i = 0; i < studentLists.length; i++) {
    let student = studentLists[i];
    let nameLowerCase = student.Name.toLowerCase(); //chuyen doi ten thanh chu thuong de so sanh
    if (nameLowerCase.includes(key)) {
      ans.push(student);
    }
  }
  renderTable(ans);
}
if (search) {
  search.addEventListener("input", searchKey);
}
//chức năng sửa

function editStudent(id) {
  //tìm kiếm đối tượng
  let student = studentLists.find((item) => item.ID === id);
  //gan moi
  if (student) {
    nameIuput.value = student.Name;
    ageInput.value = student.Age;
    classInput.value = student.Class;
    editID = id;
    btnAdd.innerText = "Cập nhật";
    btnAdd.style.backgroundColor="green"
  }
};
//chức năng delete:
function delStudent (id){
  //Xac nhan
  let confirmDel = confirm("Xác nhận xóa nội dung");
  if (confirmDel){
    let index = studentLists.findIndex((s)=>s.ID ===id);
    if (index !== -1){
      studentLists.splice(index,1);
      renderTable();
      alert("Xóa thành công");
    }
  }
  }