//b1 : lay gia tri tu ban phim
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let value = buttons[i].getAttribute("value");
    inputs.value += value;
  });
}
//b2: noi gia tri nhap vao vao o input
let inputs = document.getElementById("input");
//b3: gan buttonC thanh reset
const buttonC = document.getElementById("buttonC");
buttonC.addEventListener("click", () => {
  input.value = "";
});

//b4: thuc hien phep tinh
const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  const result = eval(input.value); 
  input.value = result;
});
