// let timer = {
//   seconds: 0,
//   start() {
//     let self = this;
//     setInterval(function() {
//       self.seconds++;
//     }, 1000);
//   }
// };

// funkcja strzałki
let timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }
};

timer.start();
setTimeout(function() {
  console.log(timer.seconds);
}, 3500);