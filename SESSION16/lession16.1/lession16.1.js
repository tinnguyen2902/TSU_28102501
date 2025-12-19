function processConfirm(question) {
  //tao ham xac nhan ket qua
  let answer = confirm(question); //gan ket qua
  let result = ""; // cau tra loi
  if (answer) {
    result += "Excellent.We`ll play a nice of chess.";
  } else {
    result += "Maybe later then";
  }
  return result; //tra ket qua
}
processConfirm("Ban chac chan muon dang xuat khong");