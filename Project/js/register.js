document.addEventListener("DOMContentLoaded", () => {
  // 1. Khai báo các biến trỏ tới các phần tử HTML
  const inputs = document.querySelectorAll(".input-nav");
  const firstNameInput = document.getElementById("firstName"); // Họ và tên đệm
  const lastNameInput = document.getElementById("lastName"); // Tên
  const emailInput = document.getElementById("email"); // Email
  const passInput = document.getElementById("pass"); // Mật khẩu
  const confirmInput = document.getElementById("confirmPass"); // Xác nhận mật khẩu
  const registerBtn = document.querySelector(".button");  //nutton dang ky
  const termCheckbox = document.querySelector(".nav-check-box");  //checkbox xác nhận

  // 2. xử lý khi nhấn nút Đăng ký
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Chặn load lại trang

    // Lấy giá trị từ các ô nhập
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passInput.value.trim();
    const confirmPass = confirmInput.value.trim();

    // 3. Kiểm tra tính hợp lệ (Validation)
    if (!firstName || !lastName || !email || !password || !confirmPass) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Kiểm tra định dạng email cơ bản
    if (email === "") {
      alert("Email không hợp lệ!");
      return;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự!");
      return;
    }

    // Kiểm tra mật khẩu nhập lại có khớp không
    if (password !== confirmPass) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Kiểm tra checkbox điều khoản
    if (!termCheckbox.checked) {
      alert("Chưa đồng ý với chính sách và điều khoản!");
      return;
    }

    // 4. Xử lý lưu dữ liệu
    // Lấy danh sách user cũ từ localStorage (nếu chưa có thì tạo mảng rỗng)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra xem email đã tồn tại chưa
    const isExisted = users.some((user) => user.email === email);
    if (isExisted) {
      alert("Email này đã được đăng ký!");
      return;
    }

    // Tạo đối tượng user mới
    const newUser = {
      fullName: `${firstName} ${lastName}`,
      email: email,
      password: password,
    };

    // Thêm vào mảng và lưu lại vào localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công! ");

    // 5. Chuyển hướng về trang đăng nhập sau khi đăng ký xong
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 500);
  });
});
