const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ?
    members
      .filter(x => typeof x === 'string')
      .map(x => typeof x === 'object' ? x[0] : x.trimStart()[0].toUpperCase())
      .sort()
      .join('')

    : false;
}

