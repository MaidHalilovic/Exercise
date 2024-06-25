const numbers = [1, -4, 12, 0, -3, 29, -150];

const pozitivnivrednosti = numbers.filter((el) => el > 0);
// console.log(pozitivnivrednosti);
///////////////////////////////////////////////////////////////////////////
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const neparnibrojevi = numbers1.filter((el) => el % 2 !== 0);
// console.log(neparnibrojevi);
/////////////////////////////////////////////////////////////////////////
const numbers3 = [1, 2, 3, 4, 5];

const kvadriranibrojevi = numbers3.map((el) => el ** 2);
// console.log(kvadriranibrojevi);
//////////////////////////////////////////////////////////////////////

const strings = ["jedan", "dva", "tri", "cetiri"];

const length = strings.map((el) => el.length);
// console.log(length);
/////////////////////////////////////
const numbers4 = [10, 20, 30, 40];

const zbir = numbers4.reduce((prev, curr) => prev + curr);
// console.log(zbir);
/////////////////////////////////

const words = ["Jedan", "Dva", "Tri"];

const spajanjeuniz = words.reduce((prev, curr) => prev + curr);
// console.log(spajanjeuniz);

// ///////////////////////////////////////////

const people = [
  { id: 1, age: 25 },
  { id: 2, age: 32 },
  { id: 3, age: 19 },
];

const adults = people.filter((el) => el.age >= 18);
// console.log(adults);

/////////////////////////////////////////////////////

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const nesto = new Person("Maid", 15);
// console.log(nesto);

//////////////////////////////////////////

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const nesto2 = new Dog("max", "breed");
// console.log(nesto2);
