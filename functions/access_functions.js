let getValue, setValue;

(function () {
  let secret = 0;

  getValue = function () {
    return secret;
  };

  setValue = function (v) {
    if (typeof v === 'number') {
      secret = v;
    }
  };

})();

console.log(getValue());
setValue(321);
console.log(getValue());
