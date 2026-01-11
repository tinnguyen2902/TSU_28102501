let form = document.getElementById("form");
let addInput = document.getElementById("add-input");
let addButton = document.getElementById("add-button");
let table = document.getElementById("button");
let tableLength = document.getElementById("table-length");
let clearButton = document.getElementById("clear-button");
//list
const lists = [
  { id: 1, title: "quét nhà" },
  { id: 2, title: "rửa bát" },
  { id: 3, title: "học online" },
  { id: 4, title: "đi chợ" },
];
//id:
let currentId = Math.max(...lists.map((t) => t.id));
//table
function renderData() {
  table.innerHTML = "";
  for (let i = 0; i < lists.length; i++) {
    let item = lists[i];
    if (item.title !== "") {
      const li = document.createElement("li");
      li.dataset.id = item.id
      li.textContent = item.title;
      table.appendChild(li);
    }
  }
  if (tableLength){
    tableLength.textContent = lists.length
  }
}
renderData();