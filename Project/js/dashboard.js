//=--DOM
let logOutBtn = document.getElementById("logOut");

logOutBtn.addEventListener("click",function logOut(e){
e.preventDefault();
const confirmLogOut = confirm("Bạn chắc chắn muốn đăng xuất không? ");
if (confirmLogOut){
    window.location.href = "../pages/login.html";
};
});