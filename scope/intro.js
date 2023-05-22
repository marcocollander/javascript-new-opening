// console.log(bar);
let bar = 'john';

function foo(){
  console.log(this);
  return bar;
}

bar = foo();



console.log(bar);