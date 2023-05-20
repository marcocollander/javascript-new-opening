const multiply = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i] * 2);
  }
  return arr;
};

const addOne = a => a + 1;

const factoryArray = n => {
  let arr = [];
  let m = 0;
  for (let i = 0; i < n; i++) {
    m = Math.floor(Math.random() * n + 1);
    arr[i] = m;
  }

  return arr;
};

const myArr = factoryArray(20);
console.log(myArr);
const arr = multiply(myArr, addOne);
console.log(arr);