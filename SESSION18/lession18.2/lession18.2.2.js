let data = [
  { name: "HTML", complete: "false" },
  { name: "CSS", complete: "false" },
  { name: "Basic of javascript", complete: "false" },
  { name: "Node package Manager (npm)", complete: "false" },
  { name: "Git", complete: "false" },
];
while (true) {
  let key = prompt("Nhap vao 5 chu cai C/R/U/D/E:");
  if (key === "C") {
    let newName = prompt("Nhap ten khoa hoc moi:").trim();
    let newComplete = prompt("Nhap trang thai (true of fale)").trim().toLowerCase();
    let newData = {
      name: newName,
      complete: newComplete === true,
    };
    let totalData = data.push(newData);
    console.log("khoa hoc sau khi thay doi", totalData);
  } else if (key === "R") {
    console.table(data);
  } else if (key === "U") {
    let nameToFind = prompt("nhap khoa hoc can update:");
    let update = data.find((p) => p.name === nameToFind);
    if (update === undefined) {
      console.log("Khoa hoc khong ton tai");
    } else {
      let newName = prompt("Nhap ten khoa hoc can update:");
      if (newName && newName.trim() !== "") {
        update.name = newName.trim();
      }
      let updateComplete = prompt("Nhap trang thai (true of false):");
      if (updateComplete === true) {
        update.conplete = true;
      } else {
        update.conplete = false;
      }
    }
    console.log("Khoa hoc sau khi cap nhat:", data);
  } else if (key === "D") {
    let indexDelete = Number(prompt("Nhap vao vi tri muon xoa:"));
    if (indexDelete >= 0 && indexDelete <= data.length) {
      let itemDelete = data.splice(indexDelete, 1);
      console.log("da xoa", itemDelete);
    } else {
      console.log("vi tri khong ton tai");
    }
  } else if (key === "E") {
    console.log("Cam on da truy cap");
    break;
  } else {
    console.log("Gia tri chua duoc dang ki");
  }
}
