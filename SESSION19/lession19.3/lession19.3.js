//==Dom
let emailIn = document.getElementById("email-in");
let passIn = document.getElementById("pass-in");
let loginButton = document.getElementById("login-button");
let emailErr = document.getElementById("email-err");
let passErr = document.getElementById("pass-err");
let error = document.getElementById("formErr");
let success = document.getElementById("formSuccess");
let form = document.getElementById("login-form");
//==data
const users = {
  email: "abc@gmail.com",
  password: "1234",
};
//---tao ham ao
function text(e, t) {
  if (!e) return;
  e.textContent = t;
  e.style.display = "block";
}
//tao ham xoa all thong bao truowc khi kt moi
function clearMess() {
  //co the viet tat thanh: text.(emailErr,"")

  //co the viet tat tuowng tu nhu tren
  error.textContent = "";
  success.textContent = "";
  emailErr.style.display = "none";
  passErr.style.display = "none";
  error.style.display = "none";
  success.style.display = "none";
}
///--ssubmit trang
form.addEventListener("submit", function (e) {
  //reset : nhớ viết thứ tự đúng rất quan trọng
  e.preventDefault(); //chan report trang
  clearMess(); //xoá thông báo cũ trước khi kt mới
  const email = emailIn.value.trim();
  const pass = passIn.value;
  let isValue = true; //gia su mk vs id dung
  //check mail trong hay k
  if (email === "") {
    emailErr.style.display = "block";
    emailErr.style.color = "red";
    isValue = false;
  }
  if (pass === "") {
    passErr.style.display = "block";
    passErr.style.color = "red";
    isValue = false;
  }
  if (!isValue) {
    return;
  }
  //check mail vs pass trung hay khong
  if (email !== users.email || pass !== users.password) {
    alert("email hoặc pass không đúng");
    return;
  }
  //hien thi thanh cong
  text(success, "Đăng nhập thành công");
  //luu trong vong 24h
  let remember = document.getElementById("remember-check");
  if (remember.checked) {
    //lay thoi gian tai thoi diem nhap vao voi don vi miligiay
    const now = new Date().getTime();
    //cong them 24h
    const expireTime = now + 24 * 60 * 60 * 1000;
    const usersSave = {
      email: email,
      expiry: expireTime,
      password: pass,
    };
    //luu len local
    localStorage.setItem("userLogin", JSON.stringify(usersSave));
  } else {
    localStorage.removeItem("userLogin");
  }
});
///hien thi xem pass, an pass
let togglePass = document.getElementById("pass-icon");
togglePass.addEventListener("click", function (e) {
  e.preventDefault();
  if (passIn.type === "password") {
    passIn.type = "text";
  } else {
    passIn.type = "password";
  }
});
//xem hoc them doan nay den het
window.onload = function () {
  const savedData = localStorage.getItem("userLogin");

  if (savedData) {
    const data = JSON.parse(savedData);
    const now = new Date().getTime();

    // So sánh thời gian hiện tại với thời gian hết hạn
    if (now < data.expiry) {
      emailIn.value = data.email; // Tự điền email vào ô nhập
      passIn.value = data.password;
      document.getElementById("remember-check").checked = true;
    } else {
      localStorage.removeItem("userLogin"); // Xóa nếu đã quá 24h
    }
  }
};
//chuyen trang khi an dang nhap
setTimeout(function () {
  window.location.href = "login.html";
}, 10000); //chuyen sang sau 10s = 10000 mls
