let regx = /J.*t/;
let regxI = /j.*t/i;
console.log(regx.test('Javascript'));
console.log(regxI.test('Javascript'));
console.log(/[a-zA-Z@._]/.test('m.kowalski@wp.pl'));
let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


console.log(emailReg.test('m.kowalski@wp.pl'))
console.log(emailReg.test('m.kowalskiwp.pl'))

let emalregx = /\S+@\S+\.\S+/