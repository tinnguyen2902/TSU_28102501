//===Dom form
let form = document.getElementById("resisterForm");
form.addEventListener("submit", function (e) {
  //ngan load lai
  e.preventDefault();
  //---DOM input
  let listUsers = JSON.parse(localStorage.getItem("listUsers"))||[];  //lay danh sach ra
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirmPass");
  //---DOM err
  let emailErr = document.getElementById("email-err");
  let passwordErr = document.getElementById("password-err");
  let confirmPassErr = document.getElementById("confirmPass-err");

  // Reset lại: Ẩn tất cả lỗi trước khi kiểm tra mới
  emailErr.style.display = "none";
  passwordErr.style.display = "none";
  confirmPassErr.style.display = "none";

  //--- gan bien
  let isValue = true;
  //kiem tra email-pass-confirm trong hay khong
  if (email.value.trim() === "") {
    emailErr.style.display = "block";
    isValue = false;
  }
  //kiem tra email da ton tai hay chua
  else{
    let emailCheck = listUsers.some(user => user.email === email.value.trim());
    if (emailCheck){
        emailErr.style.display = "block";
        emailErr.innerText = "Mail đã tồn tại";
        emailErr.style.color = "red";
        isValue = false;
    }else {
        emailErr.style.display = "none";
    }

  }
  if (password.value === "") {
    passwordErr.style.display = "block";
    isValue = false;
  }
  if (confirm.value === "") {
    confirmPassErr.style.display = "block";
    isValue = false;
  } else if (confirm.value !== password.value) {
    alert("Mật khẩu không trùng khớp");
    isValue = false;
  }
  ///all ok

  if (isValue) {
    //luu tai khoan
    let newUsers = {
        email : email.value.trim(),
        password : password.value,
    }
    
  //them vao mang
  listUsers.push(newUsers);

  localStorage.setItem("listUsers",JSON.stringify(listUsers));
  alert("Đăng kí thành công");
  form.reset();
  }
});
