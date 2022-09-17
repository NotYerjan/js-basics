function sayHelloName(callback) {
  console.log(`Hello`);
  callback();
}

function printName() {
  console.log("Yerjan");
}

setTimeout(() => sayHelloName(printName), 1000);
