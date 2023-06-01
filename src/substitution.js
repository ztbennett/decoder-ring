// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!isValidAlphabet(alphabet)) {
      return false;
    }

    const lowerCaseInput = input.toLowerCase();
    let result = "";

    for (let i = 0; i < lowerCaseInput.length; i++) {
      const currentChar = lowerCaseInput[i];

      if (currentChar === " ") {
        result += " ";
        continue;
      }

      if (encode) {
        const index = realAlphabet.indexOf(currentChar); // returns -1 if nothing is found otherwise the current index is returned 
          
        if (index !== -1) {
          const substituteChar = alphabet[index];
          result += substituteChar;
        } else {
          result += currentChar;
        }
      } else {
        const index = alphabet.indexOf(currentChar);

        if (index !== -1) {
          const substituteChar = realAlphabet[index];
          result += substituteChar;
        } else {
          result += currentChar;
        }
      }
    }

    return result;
  }

  function isValidAlphabet(alphabet) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const uniqueChars = new Set(alphabet); // eliminates duplicates and stores the new values

    if (uniqueChars.size !== 26) { 
      return false;
    }

    return true;
  }

  return {
    substitution,
  };
})();












module.exports = { substitution: substitutionModule.substitution };
