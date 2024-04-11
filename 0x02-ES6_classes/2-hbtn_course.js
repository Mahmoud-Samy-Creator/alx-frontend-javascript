export default class HolbertonCourse {
  constructor(name, length, students) {
    if ((typeof newName !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    if (typeof newLength !== 'number' && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}
