export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if ((typeof newName !== 'string') && !(newName instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' && !(newLength instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (typeof newStudents !== 'object' && !(newStudents instanceof Array)) {
      throw new TypeError('Students must be array');
    }
    this._students = newStudents;
  }
}
