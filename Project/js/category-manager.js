// DOM
const table = document.getElementById("product-list"); //noi dung bang
const addNew = document.getElementById("addNew"); //them moi
const overlay = document.getElementById("main-overlay"); //o sua sp
const categoryForm = document.getElementById("category-form"); // form sua
const modalDelete = document.getElementById("modal-delete"); //o thong bao xoa
const delNameSpan = document.getElementById("del-name"); //o gan ten sp xoa vao trong thong bao
const toastSuccess = document.getElementById("toast-success"); //o thong bao xoa thanh cong
const categoryCodeInput = document.getElementById("category-code"); //lay noi dung ma sp nhap vao
const categoryNameInput = document.getElementById("category-name"); //lay ten sp nhap vao
const searchName = document.getElementById("search-name"); //tim kiem theo ten
const searchStatus = document.getElementById("search-status"); //tim kiem theo trang thai
const codeError = document.getElementById("code-error"); //thong bao ma k dc de trong
const nameError = document.getElementById("name-error"); //thong bao ten k dc de trong
//data
let productTable = [
  { id: 1, name: "Quần áo", status: "Đang hoạt động" },
  { id: 2, name: "Kính mắt", status: "Đang hoạt động" },
  { id: 3, name: "Giày dép", status: "Đang hoạt động" },
  { id: 4, name: "Thời trang nam", status: "Ngừng hoạt động" },
  { id: 5, name: "Thời trang nữ", status: "Đang hoạt động" },
  { id: 6, name: "Hoa quả", status: "Đang hoạt động" },
  { id: 7, name: "Rau", status: "Ngừng hoạt động" },
];
//gan id sua, xoa
let editId = null;
let deleteId = null;
let currentId = Math.max(...productTable.map((t)=>t.id));
//gan vao bang
function renderTable(list = productTable) {
  let tableRows = "";
  list.forEach((category) => {
    let prodCode = "D" + String(category.id).padStart(4, "0"); //lay id lam ma danh muc
    tableRows += `
      <tr>
        <td>${prodCode}</td>
        <td>${category.name}</td>
        <td>${category.status}</td>
        <td class="icon-button">
          <button onclick="editCategory(${category.id})"><i class="fa-solid fa-pencil"></i></button>
          <button onclick="openDeleteModal(${category.id})"><i class="fa-regular fa-trash-can"></i></button>
        </td>
      </tr>`;
  });
  table.innerHTML = tableRows;
}
// modal xoa
function openDeleteModal(id) {
  const category = productTable.find((item) => item.id === id);
  if (category) {
    deleteId = id;
    delNameSpan.innerText = category.name;
    modalDelete.style.display = "flex"; // Hiện riêng modal xóa
  }
}

// Xac nhan xoa
function confirmDelete() {
  if (deleteId !== null) {
    productTable = productTable.filter((item) => item.id !== deleteId);
    renderTable();
    closeDeleteModal();
    showToast("Xoá danh mục thành công!");
    deleteId = null;
  }
}

function closeDeleteModal() {
  modalDelete.style.display = "none";
}

function editCategory(id) {
  editId = id;
  const category = productTable.find((item) => item.id === id);
  if (category) {
    overlay.style.display = "flex";
    resetErrors();
    categoryNameInput.value = category.name;
    categoryCodeInput.value = "D" + String(category.id).padStart(4, "0");
    categoryCodeInput.readOnly = true;
    categoryCodeInput.style.backgroundColor = "#f5f5f5";
    if (category.status === "Đang hoạt động")
      document.getElementById("active-opt").checked = true;
    else document.getElementById("inactive-opt").checked = true;
    document.querySelector(".form-title").innerText = "Cập nhật danh mục";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  resetErrors();
  const nameValue = categoryNameInput.value.trim();
  const activeRadio = document.getElementById("active-opt");
  const statusMap = {
    true: "Đang hoạt động",
    false: "Ngừng hoạt động",
  };
  let statusResult = statusMap[activeRadio.checked];
  if (nameValue === "") {
    nameError.innerText = "Tên danh mục không được để trống!";
    return;
  }

  if (editId !== null) {
    const index = productTable.findIndex((item) => item.id === editId);
    productTable[index].name = nameValue;
    productTable[index].status = statusResult;
    showToast("Cập nhật thành công!");
  } else {
    const nextId = currentId++ ;
    productTable.push({ id: nextId, name: nameValue, status: statusResult });
    showToast("Thêm mới thành công!");
  }
  renderTable();
  handleCloseModal();
}

addNew.onclick = function () {
  editId = null;
  overlay.style.display = "flex";
  categoryForm.reset();
  resetErrors();
  const nextId = currentId++;
  categoryCodeInput.value = "D" + String(nextId).padStart(4, "0");
  categoryCodeInput.readOnly = true;
  document.querySelector(".form-title").innerText = "Thêm mới danh mục";
};

function handleCloseModal() {
  overlay.style.display = "none";
}
function resetErrors() {
  codeError.innerText = "";
  nameError.innerText = "";
}

function showToast(message) {
  toastSuccess.querySelector(".toast-body").innerText = message;
  toastSuccess.style.display = "block";
  setTimeout(() => {
    closeToast();
  }, 3000);
}

function closeToast() {
  toastSuccess.style.display = "none";
}

function filterData() {
  const nameKey = searchName.value.toLowerCase().trim();
  const statusKey = searchStatus.value;
  const filtered = productTable.filter((item) => {
    const matchName = item.name.toLowerCase().includes(nameKey);
    return matchName && (statusKey === "" || item.status === statusKey);
  });
  renderTable(filtered);
}

searchName.addEventListener("input", filterData);
searchStatus.addEventListener("change", filterData);
renderTable();
