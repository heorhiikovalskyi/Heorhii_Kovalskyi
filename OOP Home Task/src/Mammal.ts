import { Animal } from "./Animal.js";
export abstract class Mammal extends Animal {
  GiveBirth() {
    console.log(
      this.sex === "male"
        ? "I can't give birth"
        : "I am viviparous. Here is my child."
    );
  }
}
