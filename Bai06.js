var prompt=require("prompt-sync")()
let toan=parseFloat(prompt("Nhập vào điểm Toán: "))
let li=parseFloat(prompt("Nhập vào điểm Lý: "))
let sinh=parseFloat(prompt("Nhập vào điểm Sinh: "))
let anh=parseFloat(prompt("Nhập vào điểm Anh: "))
console.log((toan+li+sinh+anh)/4);