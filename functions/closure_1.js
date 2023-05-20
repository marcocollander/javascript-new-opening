const F = function () {
  let b = 'zmienna lokalna';

  return function () {
    return b;
  };
};

// console.log(b); b nie jest dostępna z przestrzeni globalnej

let inner = F();
console.log(inner);
console.log(inner()); // => zmienna lokalna

