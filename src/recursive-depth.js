const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ?
      arr.length ? 1 + Math.max(...arr.map(x => this.calculateDepth(x))) : 1
      : 0
  }
};
