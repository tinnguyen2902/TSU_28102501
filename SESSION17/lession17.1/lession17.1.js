let text = document.getElementsByTagName("h1")[0]; //the h1 thu 1 thi dung them [0]
//console.log(text);
let hide = document.getElementsByClassName("hide")[0];
//console.log(hide);
let show = document.getElementsByClassName("show")[0];
//console.log(show);
hide.onclick = function () {
  text.style.display = "none";
};
show.onclick = function () {
  text.style.display = "block";
};
//display
//block : hien thi
// none : khong hien thi
// inline : hien thi 1 dong
//inline-block: ket hop ca 2 
