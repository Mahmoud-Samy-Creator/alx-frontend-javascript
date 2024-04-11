export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string' && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string' && !(code instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
