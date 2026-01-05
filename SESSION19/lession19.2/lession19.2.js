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
    id: 1,
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
let status = document.getElementById("status");
let username = document.getElementById("name");
let button = document.getElementById("button");
//---Tao id
let currentID = Math.max(...courses.map((t) => t.id));
//---tao table
const table = document.getElementById("table");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "No";
const th2 = document.createElement("th");
th2.textContent = "Content";
const th3 = document.createElement("th");
th3.textContent = "Due Date";
const th4 = document.createElement("th");
th4.textContent = "Status";
const th5 = document.createElement("th");
th5.textContent = "Sddigned to";
const th6 = document.createElement("th");
th6.textContent = "Action";
table.appendChild(th1);
table.appendChild(th2);
table.appendChild(th3);
table.appendChild(th4);
table.appendChild(th5);
table.appendChild(th6);
courses.forEach((item) => {
  const tr = document.createElement("tr");
  const tdNo = document.createElement("td");
  tdNo.textContent = item.id;
  const tdContent = document.createElement("td");
  tdContent.textContent = item.content;
  const tdDate = document.createElement("td");
  tdDate.textContent = item.dueDate;
  const tdStatus = document.createElement("td");
  tdStatus.textContent = item.status;
  const tdAssignedTo = document.createElement("td");
  tdAssignedTo.textContent = item.assignedTo;

  const tdAction = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Sửa";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Xóa";
  tdAction.appendChild(btnEdit);
  tdAction.appendChild(btnDel);

  tr.appendChild(tdNo);
  tr.appendChild(tdContent);
  tr.appendChild(tdDate);
  tr.appendChild(tdStatus);
  tr.appendChild(tdAssignedTo);
  tr.appendChild(tdAction);
  //chú ý ở đây vị trí các tdNo, tdContent... phải theo thứ tự
  
  table.appendChild(tr);
});
