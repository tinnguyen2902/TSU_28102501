// DOM
let form = document.getElementById("form");
let inputNew = document.getElementById("add-input");
let buttonNew = document.getElementById("add-button");
let buttonClear = document.getElementById("clear-button");
let table = document.getElementById("table");
let dataLength = document.getElementById("table-length");
let clearElement = document.getElementsByClassName("delete-child");
// data
let lists = JSON.parse(localStorage.getItem("toDoList"))||[
  { id: 1, name: "Don nha" },
  { id: 2, name: "Quet nha" },
  { id: 3, name: "Rua bat" },
];

//tao id
let currentId = lists.length > 0 ? Math.max(...lists.map((t) => t.id)) : 0;
//table
function renderData() {
  table.innerHTML = "";
  for (let i = 0; i < lists.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${lists[i].name}</td>
  <td><button onclick = "deleteTask(${lists[i].id})" class = "delete-child"><i class="fa-regular fa-trash-can"></i></button></td>`;
    table.appendChild(row);
  }
  //gán số dữ liệu cho thẻ scan
  if (dataLength) {
    dataLength.innerText = lists.length;
  }
  saveData();
}
//lưu lên local 
function saveData (){
  localStorage.setItem("toDoList",JSON.stringify(lists));
}
//chuc nang them moi
function addNewContent(e) {
  e.preventDefault();
  let newContent = inputNew.value.trim();
  if (newContent === "") {
    alert("vui long nhap noi dung");
    return;
  } else {
    let newList = { id: ++currentId, name: newContent };
    lists.push(newList);
    inputNew.value = "";
    inputNew.focus(); //dua con tro ve lai cho go
    renderData();
  }
}
buttonNew.addEventListener("click", addNewContent);
inputNew.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addNewContent();
  }
});
renderData();
//chuc nang xoa
function deleteTask(idDel) {
  if (confirm("xac nhan xoa")) {
    lists = lists.filter(function (list, index) {
      return list.id != idDel;
    });
    //cap nhat lai len local
    localStorage.setItem("toDoList",JSON.stringify(lists));
    renderData();
  }
}
//chức năng xoá all
function delAll() {
  if (confirm("xac nhan xoa.")) {
    lists = [];
    renderData();
  }
}
