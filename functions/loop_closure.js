function F() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

// Jeśli zmienna by była zadeklarowana słowem kluczowym var
// to każde wywołanie arr[]() => 3, funkcja bowiem pamięta referencję do
// środowiska, w którym została zdefiniowana. Hoisting sprawia, że pętla for
// nie ma zakresu blokowego a dla słowa kluczowego let ma.
let arr = F();
console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());