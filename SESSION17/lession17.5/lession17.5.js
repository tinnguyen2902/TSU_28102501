// list danh sach users
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

// lay thong tin tu form

//. bat su kien submit form
function handleSubmit(event) {
  //an vao submit thi chay function
  event.preventDefault(); //phuong thuc ngan chan load lai trang
  // console.log("form submit...");

  //lay thong tin tu form
  const emailInputElement = document.querySelector("#email-input");
  const passwordInputElement = document.querySelector("#password-input");
  const emailErrorElement = document.querySelector("#email-error");
  const passwordErrorElement = document.querySelector("#password-error");
  // gop thong tin thanh 1 doi tuong
  //   const usersInfo = {
  //     email: emailInputElement.value,
  //     password: passwordInputElement,
  //     value,
  //   };
  //an hien thong baobbao
  // neu gia tri nhap vao ma rong thi style chuyen sang block va nguoc lai
  if (!emailInputElement.value) {
    emailErrorElement.style.display = "block";
  } else {
    emailErrorElement.style.display = "none";
  }
  if (!passwordInputElement.value) {
    passwordErrorElement.style.display = "block";
  } else {
    passwordErrorElement.style.display = "none";
  }

  //kiem tra du lieu  tu form vs mang users
  if (emailInputElement.value && passwordInputElement.value) {
    let isLoginSuccessFull = false;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === emailInputElement.value &&
        users[i].password === passwordInputElement.value
      ) {
        alert("Dang Nhap Thanh Cong");
        isLoginSuccessFull = true;
        break;
      }
    }
    if (!isLoginSuccessFull) {
      alert("email hoac password khong khop");
    }
  }
}



