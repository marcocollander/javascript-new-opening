// function identify() {
//   return this.name.toUpperCase();
// }
//
// function speak() {
//   const greeting = 'Witaj, jestem ' + identify.call(this);
//   console.log(greeting);
// }
//
const me = {
  name: 'Kyle'
};

const you = {
  name: 'Mark'
};
//
// identify.call(me);
// identify.call(you);
//
// speak.call(me);
// speak.call(you);

function identify(context){
  return context.name.toUpperCase();
}

function speak(context) {
  const greeting = 'Witaj, jestem ' + identify(context);
  console.log(greeting);
}

speak(me);
speak(you);

// Zamiast this można by stosować zmienną (jawny parametr), ale this jest
// elegantsze i zapewnia przejrzystszy kod.

function foo(num) {
  console.log(`foo: ${num}`);
  // Próba określenia liczby wywołań funkcji foo
  // this.count++;
  data.count++;
}

// foo.count = 0;
let data = {
  count: 0
};

for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

// console.log(`Ilość wywołań ${foo.count}`);
console.log(`Ilość wywołań ${data.count}`);
