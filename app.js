function multiplyByTwo(value = 10) {
  let number = 2;
  function inner() {
    return value * number;
  }
  return inner;
}

console.log(multiplyByTwo()());
