//--data
const courses = [
  {
    id: 1,
    content: "Learn JS session 01",
    dueDate: "2023-04-16",
    status: "Pending",
    assignedTo: "A Bach",
  },
  {
    id: 2,
    content: "Learn JS session 02",
    dueDate: "2023-04-16",
    status: "Pending",
    assignedTo: "Lam",
  },
  {
    id: 3,
    content: "Learn CSS session 01",
    dueDate: "2023-04-16",
    status: "Pending",
    assignedTo: "Hieu",
  },
];

//---DOM
let form = document.getElementById("manager");
let content = document.getElementById("content");
let date = document.getElementById("date");
let username = document.getElementById("name");
let button = document.getElementById("button");
let table = document.getElementById("table");
let statusInput = document.getElementById("status");
let icon = document.getElementById("icon");
let optionsContainer = document.getElementById("status-options");

//---Biến quản lý
let editId = null;
let currentID = Math.max(...courses.map((t) => t.id));

// VẼ NGANG TITLE
function renderInitialTable() {
  table.innerHTML = `
  <tr><th>No</th>
  <th>Content</th>
  <th>Due Date</th>
  <th>Status</th>
  <th>Assigned to</th>
  <th>Action</th></tr>`;
  //for (let i=0;i<courses.length;i++)
  //let item = courses[i]. doan nay bang voi vong lap forEach duoi
  courses.forEach((item) => {
    renderNewRow(item);
  });
}
//HÀM VẼ DÒNG NGANG
function renderNewRow(item) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.content}</td>
    <td>${item.dueDate}</td>
    <td>${item.status}</td>
    <td>${item.assignedTo}</td>
    <td>
      <button type="button" onclick="handleEdit(${item.id})">Sửa</button>
      <button type="button" onclick="handleDel(${item.id})">Xoá</button>
    </td>`;
  table.appendChild(tr);
}
// CHỌN STATUS (Phải nằm ngoài hàm addNew)
icon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (optionsContainer.innerHTML !== "") {
    optionsContainer.innerHTML = "";
    return;
  }
  const statuses = ["Pending", "Waiting", "In progress"];
  statuses.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    p.addEventListener("click", function () {
      statusInput.value = this.textContent;
      optionsContainer.innerHTML = "";
    });
    optionsContainer.appendChild(p);
  });
});

document.addEventListener("click", () => {
  optionsContainer.innerHTML = "";
});

//HÀM HỖ TRỢ ĐỔI DỮ LIỆU KHI SỬA
function handleEdit(id) {
  const item = courses.find((c) => c.id === id);
  if (item) {
    content.value = item.content;
    date.value = item.dueDate;
    statusInput.value = item.status;
    username.value = item.assignedTo;
    editId = id;
    button.textContent = "Cập nhật";
  }
}

//CHỨC NĂNG CHÍNH: THÊM VÀ SỬA
function addNew(e) {
  if (e) e.preventDefault();

  const newContent = content.value.trim();
  const newDate = date.value;
  const newStatus = statusInput.value;
  const newUsername = username.value.trim();

  if (
    newContent === "" ||
    newDate === "" ||
    newStatus === "" ||
    newUsername === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  if (editId !== null) {
    // TRƯỜNG HỢP SỬA
    const index = courses.findIndex((s) => s.id === editId);
    if (index !== -1) {
      courses[index] = {
        id: editId,
        content: newContent,
        dueDate: newDate,
        status: newStatus,
        assignedTo: newUsername,
      };
      alert("Cập nhật thành công");

      // Vẽ lại bảng mới
      renderInitialTable();

      // Reset trạng thái
      editId = null;
      button.textContent = "Submit";
      form.reset();
    }
  } else {
    // TRƯỜNG HỢP THÊM MỚI
    //GIẢ SỬ: currentID = 1
    // current++ = 2
    // ++current = 2
    const newId = ++currentID;
    const newCourseObj = {
      id: newId,
      content: newContent,
      dueDate: newDate,
      status: newStatus,
      assignedTo: newUsername,
    };
    courses.push(newCourseObj);
    renderNewRow(newCourseObj);
    alert("Thêm thành công");
    form.reset();
  }
}
//---Gán sự kiện và chạy bảng
form.addEventListener("submit", addNew);
renderInitialTable();
//chuc nang xoa
function handleDel(id) {
  //xac nhan
  let isComfirm = confirm("xác nhận xóa nội dung này không?");
  if (isComfirm){
    let index = courses.findIndex((s)=>s.id === id);
    if (index !== -1){
      courses.splice(index,1);
      renderInitialTable();
      alert("xóa thành công");
    }
  }
}