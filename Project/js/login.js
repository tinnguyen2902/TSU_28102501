// ---DOM 
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".form");
    const emailInput = document.getElementById("emailInput");
    const passInput = document.getElementById("passInput");

    // Lắng nghe sự kiện submit của form
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Ngăn trang web reload lại
        // 1. Lấy giá trị từ input
        const email = emailInput.value.trim();
        const password = passInput.value.trim();
        // 2. Kiểm tra dữ liệu đầu vào (Validation)
        if (!email || !password) {
            alert("Vui lòng nhập đầy đủ email và mật khẩu!");
            return;
        }
        // 3. Lấy dữ liệu người dùng từ localStorage (giả sử đã đăng ký trước đó)
        // Dữ liệu thường được lưu dưới dạng mảng các object
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // 4. Kiểm tra tài khoản có tồn tại không
        const userFound = users.find(
            (user) => user.email === email && user.password === password
        );
        if (userFound) {
            alert("Đăng nhập thành công!");
            // Lưu trạng thái đăng nhập của người dùng hiện tại
            localStorage.setItem("currentUser", JSON.stringify(userFound));
            // Chuyển hướng sang trang chủ (ví dụ index.html)
            window.location.href = "./dashboard.html"; 
        } else {
            alert("Email hoặc mật khẩu không chính xác!");
        }
    });
});