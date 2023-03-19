export type sex = "male" | "female";
export abstract class Animal {
  protected sex: sex;
  private name: string;
  private age: number;
  private weight: number;
  protected is_domesticated: Boolean;
  constructor(
    name: string,
    age: number,
    weight: number,
    is_domesticated: Boolean,
    sex: sex
  ) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.is_domesticated = is_domesticated;
    this.sex = sex;
  }
  get sex_() {
    return this.sex;
  }
  get name_() {
    return this.name;
  }
  get age_() {
    return this.age;
  }
  get weight_() {
    return this.weight;
  }
  get is_domesticated_() {
    return this.is_domesticated;
  }
  set sex_(sex: sex) {
    this.sex = sex;
  }
  set name_(name: string) {
    this.name = name;
  }
  set age_(age: number) {
    this.age = age;
  }
  set weight_(weight: number) {
    this.weight = weight;
  }
  set is_domesticated_(is_domesticated: Boolean) {
    this.is_domesticated = is_domesticated;
  }
  abstract Sleep(): void;
  abstract Move(): void;
  abstract Eat(): void;
  abstract GiveBirth(): void;
}
