const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num.map(n => n * 2))
num.forEach(n => console.log(n % 2))
// console.log(num.forEach(n => n * 2)); => undefined
console.log(num.filter(n => n % 2 == 0))
console.log(num.filter(n => n >= 3))