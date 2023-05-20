function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

// parametr reszty (ang. rest parametr)
function add(a, ...vargs) {
  let result = 0;
  for (let i = 0; i < vargs.length; i++) {
    result += vargs[i];
  }
  return result;
}

const mark = ['Mark', 'Kowalski', 'Wrocław', 'm.kowalski@wp.pl', 47];
console.log(...mark);
console.log(mark);


console.log(add(2, 4, 5, 6, 7, 23, 56));

// spread operator
const midweek = ['Śr', 'Czw'];
const weekend = ['Sob', 'Niedz'];
const week = ['Pon', 'Wt', ...midweek, 'Pt', ...weekend];

console.log(week);

