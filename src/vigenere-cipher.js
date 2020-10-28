const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directMode = true) {
    this.isDirect = directMode;
  }

  get firstLetterCode() {
    return 97
  };

  get lastLetterCode() {
    return 122
  };

  get alphabetLength() {
    return this.lastLetterCode - this.firstLetterCode + 1
  };

  encrypt(input, code) {
    if (arguments.length < 2) {
      throw new Error('pass the text and code for encryption')
    }

    let inputArr = input.toLowerCase().split('');
    let codeArr = code.toLowerCase().split('');
    let codeIndex = 0;
    let result = inputArr.map((x) => {
      if (x >= 'a' && x <= 'z') {
        return String.fromCharCode(
          this.firstLetterCode +
          (x.charCodeAt(0) + codeArr[codeIndex++ % codeArr.length].charCodeAt(0)) %
          this.firstLetterCode % this.alphabetLength
        );
      } else {
        return x;
      }
    });
    return this.isDirect ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  };

  decrypt(input, code) {
    if (arguments.length < 2) {
      throw new Error('pass the text and code for decryption')
    }

    let inputArr = input.toLowerCase().split('');
    let codeArr = code.toLowerCase().split('');
    let codeIndex = 0;
    let result = inputArr.map((x) => {
      if (x >= 'a' && x <= 'z') {
        return String.fromCharCode(
          this.firstLetterCode +
          (x.charCodeAt(0) >= codeArr[codeIndex % codeArr.length].charCodeAt(0) ?
            x.charCodeAt(0) - codeArr[codeIndex++ % codeArr.length].charCodeAt(0)
            : this.lastLetterCode + 1 + x.charCodeAt(0) - codeArr[codeIndex++ % codeArr.length].charCodeAt(0))
          % this.firstLetterCode % this.alphabetLength
        );
      } else {
        return x;
      }
    });
    return this.isDirect ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  };

}

module.exports = VigenereCipheringMachine;
