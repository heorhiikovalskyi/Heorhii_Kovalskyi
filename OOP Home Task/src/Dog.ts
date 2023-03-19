import { Mammal } from "./Mammal.js";
import { sex } from "./Animal.js";
export class Dog extends Mammal {
  constructor(
    name: string,
    age: number,
    weight: number,
    is_domesticated: Boolean,
    sex: sex
  ) {
    super(name, age, weight, is_domesticated, sex);
  }
  Move() {
    console.log("I walk on 4 legs. I move pretty fast");
  }
  Sleep() {
    console.log(
      "I sleep in the night. I sleep quite sensitively and can hear the danger"
    );
  }
  Guard() {
    console.log(
      this.is_domesticated ? "I`m guarding my owner" : "I won`t guard my owner"
    );
  }
  Eat() {
    console.log(
      this.is_domesticated
        ? "I`m eating special fodder"
        : "I`m eating smth in the street"
    );
  }
}
