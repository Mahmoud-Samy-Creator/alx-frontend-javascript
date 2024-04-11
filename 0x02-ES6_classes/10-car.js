export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(brand) {
    if (typeof brand !== 'string' && !(brand instanceof String)) {
      throw TypeError('Brand must be a string');
    }
    this._brand = brand;
  }

  set motor(motor) {
    if (typeof brand !== 'string' && !(motor instanceof String)) {
      throw TypeError('Motor must be a string');
    }
    this._motor = motor;
  }

  set color(color) {
    if (typeof color !== 'string' && !(color instanceof String)) {
      throw TypeError('Color must be a string');
    }
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
