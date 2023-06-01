// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift > 25 || shift < -25) return false; 
    let lowerCase = input.toLowerCase();
    let answer = "";


    for (let i = 0; i < lowerCase.length; i++){
      let currentLetter = lowerCase[i];
      if(currentLetter === " " || specialChar.test(currentLetter)){
        answer += currentLetter;
        continue; 
      } 
      if(encode){
        let letterLocation = alphabet.indexOf(currentLetter)
        let newLocation = letterLocation + shift; 
        if(newLocation > 25) newLocation = newLocation - 26; 
        if(newLocation < 0) newLocation = newLocation + 26;  
        
        answer += alphabet[newLocation];
      }  
      if(!encode){
        let letterLocation = alphabet.indexOf(currentLetter)
        let newLocation = letterLocation - shift; 
        if(newLocation > 25) newLocation = newLocation - 26; 
        if(newLocation < 0) newLocation = newLocation + 26;  
        
        answer += alphabet[newLocation];
      }       
    } 
      return answer; 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


