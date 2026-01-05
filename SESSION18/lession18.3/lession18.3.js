
// ====== DATA ======
let tasks = [
  { id: 1, title: "Xin việc mới", status: false },
  { id: 2, title: "Xây nhà", status: true },
  { id: 3, title: "Cuới vợ", status: false },
  { id: 4, title: "Sinh con", status: false },
  { id: 5, title: "Đi du lịch", status: true },
];

let currentID = Math.max(...tasks.map((t) => t.id));
//dùng hàm math.max để lấy được id max trong mảng, ... tương tự với dấu phẩy giữa các kí tự
// ====== DOM ======
const todoList = document.getElementById("todoList");
const input = document.getElementById("todoInput");
const button = document.getElementById("button");

// ====== RENDER ======
function renderData() {
  todoList.innerHTML = "";  //tránh lặp lại khi thêm mới

  for (const task of tasks) {
    const li = document.createElement("li"); //thêm thẻ li
    li.dataset.id = String(task.id);        
    if (task.status){
        li.style.backgroundColor = "#BC8F8F";
    }

    // Title (click để toggle)
    const span = document.createElement("span");
    span.textContent = task.title;
    span.style.cursor = "pointer";
    if (task.status) {
        span.style.textDecoration = "line-through";
    }

    // Nút xóa (đủ CRUD)
    const delBtn = document.createElement("button");
    delBtn.textContent = "Xoá";
    delBtn.dataset.action = "delete";
    delBtn.style.marginLeft = "10px";

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  }
}

renderData();

// ====== CREATE ======
function addTask() {
  const value = input.value.trim();
  if (value === "") {
    alert("Noi dung khong duoc trong");
    return;
  }

  currentID += 1;
  tasks.push({
    id: currentID,
    title: value,
    status: false,
  });

  input.value = "";
  input.focus();
  renderData();
}

button.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// ====== UPDATE/DELETE (Event Delegation) ======
// Chặn click bị chạy khi double click bằng timer
let clickTimer = null;
const CLICK_DELAY = 220; //220 mili giây con số tương đối để phân biêt click or dbclick

todoList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);
  if (!Number.isFinite(id)) return;

  // Nếu bấm nút Xoá
  if (event.target.dataset.action === "delete") {
    tasks = tasks.filter((t) => t.id !== id);
    renderData();
    return;
  }

  // Nếu click vào title => toggle status (nhưng phải chờ xem có dblclick không)
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.status = !task.status;
    renderData();
  }, CLICK_DELAY);
});

todoList.addEventListener("dblclick", (event) => {
  // dblclick thì hủy toggle click đang chờ
  clearTimeout(clickTimer);

  const li = event.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);
  if (!Number.isFinite(id)) return;

  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  const newTitle = prompt("Nhap noi dung can sua", task.title);
  if (newTitle === null) return;

  const title = newTitle.trim();
  if (title === "") {
    alert("Noi dung khong duoc trong");
    return;
  }

  task.title = title;
  renderData();
});
//lưu ý: dòng số 11,78,79,20 cần thuộc hay dùng