const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNumeric = parseFloat(sampleActivity);
  if (typeof sampleActivity === 'string' && sampleActivityNumeric > 0 && sampleActivityNumeric < MODERN_ACTIVITY) {

    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumeric) * HALF_LIFE_PERIOD / Math.log(2).toFixed(3) );
  }
    return false;
};
