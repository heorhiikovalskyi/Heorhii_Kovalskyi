import { Animal } from "./Animal.js";
import { sex } from "./Animal.js";
export abstract class Bird extends Animal {
  private beakLength: number;
  private isMigratory: Boolean;
  constructor(
    name: string,
    age: number,
    weight: number,
    is_domesticated: Boolean,
    sex: sex,
    beakLength: number,
    isMigratory: Boolean
  ) {
    super(name, age, weight, is_domesticated, sex);
    this.beakLength = beakLength;
    this.isMigratory = isMigratory;
  }
  get beakLength_() {
    return this.beakLength;
  }
  get isMigratory_() {
    return this.isMigratory;
  }
  set beakLength_(beakLength: number) {
    this.beakLength = beakLength;
  }
  set isMigratory_(isMigratory: Boolean) {
    this.isMigratory = isMigratory;
  }
  Move() {
    console.log("I float in the air");
  }
  BuildNest() {
    console.log("I`m building nest for my eggs");
  }
  Sleep() {
    console.log("I`m sleeping in the nest");
  }
  GiveBirth() {
    console.log(
      this.sex === "male" ? "I can't give birth" : "Here's my egg with the cub"
    );
  }
  Migrate() {
    console.log(
      this.isMigratory ? "I`m migrating to hot places" : "I will stay at home!"
    );
  }
}
