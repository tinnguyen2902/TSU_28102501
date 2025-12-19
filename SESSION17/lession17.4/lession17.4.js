let items = document.querySelectorAll('.item'); //lay ra tuong tu nhu mang
items.forEach((el) => {    //dung vong lap for de chay qua tung phan tu el
  el.onmouseover = function () {    //
    let bgColor = el.getAttribute('id');
    document.body.style.backgroundColor = bgColor ;
  };
});
