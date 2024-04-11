export default class Building {
  constructor(sqft) {
    /**
     * Consider this class as an abstract class.
     * Make sure that any class that extends from it should implement a method:
     * evacuationWarningMessage.
     * If a class that extends from it does not have a evacuationWarningMessage method,
     * throw an error => Class extending Building must override evacuationWarningMessage
     */
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
