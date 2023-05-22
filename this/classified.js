function foo() {
  console.log(this.a);
}

const obj = {
  a: 2,
  foo: foo
};

obj.foo();