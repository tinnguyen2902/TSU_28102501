let original = {
    name : "bob",
    age : 30
}
console.log(original);
let newObject = Object.assign(original);
newObject.name = "Charlie";
console.log(newObject);

