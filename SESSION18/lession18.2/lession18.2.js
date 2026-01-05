//bai 1:
let products = [
    {id : 1, name: 'Milk', count: 100},
    {id : 2, name: 'Orange', count : 100},
    {id :3, name: 'Butter',count : 100},
];
products.push ({id :7, name : "Banana",count : 40}); //them cuoi
products.unshift({id : 0, name : "Coconut",count:120});  //them dau
products.splice(2,0,{id:6,name : "apple",count : 80});  //them giua
products.splice(3,1);    //xoa id 2
products[3]= {id : 3, name : 'Butter', count : 0};  // truy van id 3 va sua count : 0
console.log(products);  // log ra kq

// tim kiem voi tu khoa butter
let key = products.find((p) => p.name === "Butter");  //dung find de tim kiem, p la 1 phan tu , p.name lay gia tri thuoc tinh name
console.log(key);
if (key) {
  console.log(key);
} else {
  console.log("Không có sản phẩm Butter");
}


