//bai 1:
let object = {
   Id : 001, 
   Name :"Nguyen Van A" ,
   Age : "23",
   Gender: "nam",
   Tel : "090-0000-111",
   Add : "Viet Nam",
};
// console.log(`Thong tin ve doi tuong :${JSON.stringify(object)}`);
console.log("Thong tin ve doi tuong :", object);
//bai 2
let student = {
    Id : 1,
    Name : "Nguyen Van A",
    Gender: "Nam",
    Age : 20,
    Mark : 8
}
console.log(student);

let newStudent = {
  Id: 2,
  Name: "Nguyen Phan A",
  Gender: "Nu",
  Age: 20,
  Mark: 5,
};
console.log(newStudent);

let students = [student,newStudent];
console.log(students);
console.table(students);
//bai 3:
let a = student.Mark;
console.log(a);
let b = newStudent.Mark;
console.log(b);
if (a>b){
    console.log(student);
}else {
    console.log(newStudent);
}