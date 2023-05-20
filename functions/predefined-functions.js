// lista funkcji wbudowanych:
// parseInt()
// parseFloat()
// isNaN()
// isFinite()
// encodeURI()
// decodeURI()
// encodeURIComponent()
// decodeURIComponent()
// eval()

isNaN(NaN); // true
isNaN(123); // false
isNaN('123'); // false
Number.isNaN('123');
isNaN(parseInt('123'));

eval('let x = 2');
// console.log(x); ReferenceError: x is not defined
eval('var x = 2');
// console.log(x); => 2
