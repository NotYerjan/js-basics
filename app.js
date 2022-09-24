function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

const iphone = new Smartphone("Apple", "Iphone 13", 1300);
const android = new Smartphone("Samsung", "Galaxy S22", 1200);

console.log(iphone, android);
