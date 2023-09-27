const celsius = prompt("Введiть температуру: ")
console.log("Температура в градусах Фаренгейта:", celsius * 9/5 + 32)

const days = prompt("Введiть днiв у мiсяцi: ")
const hours = days * 24
const minutes = hours * 60
console.log("Кiлькiсть годин у мiсяцi: " + hours)
console.log("Кiлькiсть хвилин у мiсяцi: " + minutes)

let health = 100
let energy = 60
console.log("Здоров'я після зменшення:", health -= Math.random())
console.log("Енергія після зменшення:", energy -= Math.random())

const price = prompt("Введiть суму покупки: ")
const discount = price * 0.10
console.log("Сума зі знижкою:", price - discount)

let testNumber = 8.2
console.log("Округлене число: " + Math.floor(testNumber))

let myString = "9.12"
console.log(parseFloat(myString))

let string = "98"
console.log(parseInt(string))

let mathNumber = 49
console.log(Math.sqrt(mathNumber))


var intNumber = 55;
var strNumber = "111";
parseInt(strNumber);
console.log(strNumber);
intNumber.toString();
console.log(intNumber);