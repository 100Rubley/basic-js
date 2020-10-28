const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {};
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = result.turns / (turnsSpeed / 3600);

  return result;
};
