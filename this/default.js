// Mechanizm "this" to wiązanie powstające w trakcie wywołania funkcji


function foo() {
  console.log(`Jestem w zakresie lokalnym this.a = ${this.a}`);
}

// var a = 2;
let a = 2;
console.log(`Jestem w obszarze globalnym a = ${a}`);

foo(); // w node => undefined, w browser => 2

// Dla przeglądarki "this" odwołuje się do obiektu globalnego,
// czyli w miejscu wywołania, nastąpiło wiązanie domyślne

