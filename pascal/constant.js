'use strict';

module.exports = class Constant {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name;
  }
}