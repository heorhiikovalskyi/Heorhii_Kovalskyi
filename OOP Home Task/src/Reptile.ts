import { Animal } from "./Animal.js";
import { sex } from "./Animal.js";
export abstract class Reptile extends Animal {
  private isVenomous: Boolean;
  PoisonEnemy(enemy: string) {
    console.log(
      this.isVenomous
        ? `Im poisoning my enemy ${enemy}`
        : "I don't have poison(("
    );
  }
  Move() {
    console.log("I`m crawling on my belly");
  }
  RegulateTemperature() {
    console.log(
      "I`m regulating body temperature basking in the sun or seeking shade"
    );
  }
  GiveBirth() {
    console.log(
      this.sex === "male" ? "I can't give birth" : "Here's my egg with the cub"
    );
  }
  constructor(
    name: string,
    age: number,
    weight: number,
    is_domesticated: Boolean,
    sex: sex,
    isVenomous: Boolean
  ) {
    super(name, age, weight, is_domesticated, sex);
    this.isVenomous = isVenomous;
  }
  get isVenomous_() {
    return this.isVenomous;
  }
  set isVenomous_(isVenomous: Boolean) {
    this.isVenomous = isVenomous;
  }
}
