function F(param) {
  let N = function () {
    return param;
  };
  param++;
  return N;
}

let inner = F(123);

console.log(inner());