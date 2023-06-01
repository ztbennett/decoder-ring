// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
    it("should return false if alphabet isn't 26 characters", () => {
        const message = "test"; 
        const alphabet = "abcdefg"; 
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })

    it("should correctly tranlate the phrase based on input alphabet", () => {
        const message = "zach"; 
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"; 
        const actual = substitution(message, alphabet); 
        const expected = "qpmj"; 
        expect(actual).to.equal(expected)
    })

    it("should return false if there are any duplicate characters", () => {
        const message = "test"; 
        const alphabet = "abcabc"; 
        const actual = substitution(message, alphabet); 
        expect(actual).to.be.false; 
    })

    it("should maintain spaces and special characters", () => {
        const message = "zach ."; 
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet); 
        const expected = "qpmj ."; 
        expect(actual).to.equal(expected); 
    })

    it("should ignore capital letters", () => {
        const message = "Zach";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"; 
        const actual = substitution(message, alphabet); 
        const expected = "qpmj"; 
        expect(actual).to.equal(expected); 
    })

})