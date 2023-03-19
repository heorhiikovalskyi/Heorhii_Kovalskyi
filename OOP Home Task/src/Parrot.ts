import { Bird } from "./Bird.js";
export class Parrot extends Bird {
  Eat() {
    console.log(
      this.is_domesticated
        ? "I`m eating special fodder"
        : "I`m eating some nuts and oat"
    );
  }
  Sing() {
    console.log("I`m singing very nice song");
  }
}
