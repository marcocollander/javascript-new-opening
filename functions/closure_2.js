let inner;

let F = function () {
  let b = 'zmienna lokalna';
  inner = function () {
    return b;
  };
};

F();
console.log(inner());