var prompt=require("prompt-sync")()
let number=parseInt(prompt("Nhập vào một số: "))
let donvi=number%10
number=parseInt(number/10)
let chuc=number%10
number=parseInt(number/10)
let tram=number%10
console.log('Đơn vị: '+donvi)
console.log('Chục: '+chuc)
console.log('Trăm: '+tram)