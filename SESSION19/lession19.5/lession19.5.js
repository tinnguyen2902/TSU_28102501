//DOM
let form = document.getElementById("form");
let boxForm = document.getElementById("box-form");
let closeBtn = document.getElementById("close-btn");
let nameInput = document.getElementById("input-web");
let urlInput = document.getElementById("input-url");
let save = document.getElementById("save");
let errName = document.getElementById("err-name");
let errUrl = document.getElementById("err-url");
let closeChild = document.getElementsByClassName("close-btn-child");
//data
let website = [
  { id: 1, name: "Google", title: "Search" },
  { id: 2, name: "Youtube", title: "Video Sharing" },
];
// Load data từ localStorage nếu có
const dataLocal = JSON.parse(localStorage.getItem("web"));
if (dataLocal && Array.isArray(dataLocal)) {
  website = dataLocal;
}

//tao id
let currentId = website.length > 0 ? Math.max(...website.map((t) => t.id)) : 0;
//table
function renderTable() {
  form.innerHTML = "";
  website.forEach((e) => {
    let div = document.createElement("div");
    div.className = "container-form";
    let li1 = document.createElement("li");
    li1.textContent = `${e.name}`;
    let li2 = document.createElement("li");
    li2.textContent = `${e.title}`;
    let button = document.createElement("button");
    button.textContent = "X";
    button.className = "close-btn-child";
    button.addEventListener("click",function(){
        del(e.id);
    });
    div.appendChild(li1);
    div.appendChild(li2);
    div.appendChild(button);
    form.appendChild(div);
  });
}
renderTable();
function add() {
  //ấn vào hiện box lên
  boxForm.style.display = "block";
}
//an nut x thi tat box
closeBtn.addEventListener("click", function () {
  boxForm.style.display = "none";
});
save.addEventListener("click", function () {
  let isValue = true;
  if (nameInput.value.trim() === "") {
    errName.style.display = "block";
    isValue = false;
  } else {
    errName.style.display = "none";
  }
  if (urlInput.value.trim() === "") {
    errUrl.style.display = "block";
    isValue = false;
  } else {
    errUrl.style.display = "none";
  }
  if (!isValue) {
    return;
  }
  const newName = {
    id: ++currentId,
    name: nameInput.value.trim(),
    title: urlInput.value.trim(),
  };
  website.push(newName);
  renderTable();
  boxForm.style.display = "none";
  nameInput.value = "";
  urlInput.value = "";
});
function del(idDel){
   if (confirm("xac nhan xoa")){
    website = website.filter((l)=>l.id !== idDel)
    localStorage.setItem("web",JSON.stringify(website));
    renderTable();
   }
}