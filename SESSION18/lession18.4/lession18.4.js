// ==DOM====
let input = document.getElementById("input-text");
let buttons = document.getElementsByClassName("button");
//---hien thi ra man hinh consolo:
for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener("click",function(){
        console.log(element.innerText);
    });
}
//---nut delete
let deleteButton = document.getElementsByClassName("button-del")[0];
    deleteButton.addEventListener("click",()=>{
    input.value = "";
})
//hien thi vao textare
for (let j = 0 ; j< buttons.length; j++){
    buttons[j].addEventListener("click",function(){
        const value = buttons[j].value;
        if (value === "delete"){
            input.value ="";
        }else {
            input.value += value;
        }
        });
    }