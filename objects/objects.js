const config = {
  host: 'localhost',
  port: '8080',
  timeout: 900,
};

let { host, port } = config;
let { timeout: tout } = config;

console.log(host);
console.log(port);
console.log(tout);

let a = 2,
  b = 3;
const val = { a, b };
console.log(val);

const arr = ['a', 'b', 'c', 'd', 'e'];
const [, x, ...y] = arr;
console.log(x, y);

function startServer(configValue) {
  console.log(configValue.host);
}

startServer({ host, port, timeout } = config);
startServer(config);