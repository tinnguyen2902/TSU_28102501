function handleChange (event) {
    console.log("changed:", event.target.value);
}

const users = [
    {
        id: 1,
        email: "abc@gmail.com",
        password: "12344321",
    },
    {
        id: 2,
        email: "abd@gmail.com",
        password: "123454321",
    },
    {
        id: 3,
        email: "cbd@gmail.com",
        password: "123424321",
    },
    {
        id: 2,
        email: "aed@gmail.com",
        password: "1234521",
    },
];
function handleSubmit(event){
    event.preventDefault();
    console.log("form submit...");
}
// lay thong tin tu form
const emailInputElement = document.querySelector(".btn-button-email");
const passwordInputElement = document.querySelector(".btn-button-password");
const emailErrorElement = document.querySelector("#email-error");
const passwordErrorElement = document.querySelector("#password-error");
if(!emailInputElement.value){
    emailErrorElement.style.display = "block";
}else{
    emailErrorElement.style.display = "none";
}
if (!passwordInputElement.value) {
  passwordErrorElement.style.display = "block";
} else {
  passwordErrorElement.style.display = "none";
}
if (emailInputElement.value && passwordInputElement.value){
    let isLoginSuccessFull = false;
    for (let i = 0;i< users.length;i++){
        if(users[i].email === emailInputElement.value &&
            users[i].password === passwordInputElement.value
        ){
            console.log("Dang Nhap Thanh Cong");
            isLoginSuccessFull = true;
            break;
        }
    }
    if (!isLoginSuccessFull){
        console.log("email hoac password khong khop");
    }
}