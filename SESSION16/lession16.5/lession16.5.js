let text = prompt("Nhap chuoi can kiem tra:");
function isPalindrome(text) {
    text = text.toLowerCase();
    let reversed = text.split("").reverse().join("");
    return text === reversed ;
}
let answer = isPalindrome(text);
console.log(answer);
