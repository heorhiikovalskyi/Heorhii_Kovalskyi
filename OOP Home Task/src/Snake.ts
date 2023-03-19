import { Reptile } from "./Reptile.js";
import { sex } from "./Animal.js";
export class Snake extends Reptile {
  private length: number;
  constructor(
    name: string,
    age: number,
    weight: number,
    is_domesticated: Boolean,
    sex: sex,
    isVenomous: Boolean,
    length: number
  ) {
    super(name, age, weight, is_domesticated, sex, isVenomous);
    this.length = length;
  }
  Coil(enemy: string) {
    console.log(
      `Im coiling around my prey ${enemy} to constrict and suffocate it. Im really good in this because Im ${this.length} meters tall`
    );
  }
  ShedSkin() {
    console.log("I`m shedding my skin");
  }
  Eat() {
    console.log("I`m eating rodents and birds");
  }
  Sleep() {
    console.log(
      "I sleep curled up. My sleep is very sensitive. I'm hibernating. "
    );
  }
}
