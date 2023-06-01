// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar",() => {
    it("should return false if shift is equal to zero", () => {
        const message = "test";
        const shift = 0; 
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })

    it("should return false if shift is greater than 25", () => {
        const message = "test";
        const shift = 26; 
        const actual = caesar(message, shift);
        expect(actual).to.be.false; 
    })

    it("should return false if shift is less than -25", () => {
        const message = "test";
        const shift = -26; 
        const actual = caesar(message, shift); 
        expect(actual).to.be.false; 
    })

    it("should return false if shift is no info is entered for shift", () => {
        const message = "test";
        const shift = null; 
        const actual = caesar(message, shift); 
        expect(actual).to.be.false; 
    })

    it("should ignore capital letters", () => {
        const message = "Test"; 
        const shift = 5; 
        const actual = caesar(message, shift); 
        const expected = "yjxy";
        expect(actual).to.equal(expected);  
    })
    it("should handle shifts that go past Z", () => {
        const message = "Zach"; 
        const shift = 5; 
        const actual = caesar(message, shift); 
        const expected = "efhm"; 
        expect(actual).to.equal(expected); 
    })
    
    it("should leave spaces and symbols as is", () => {
        const message = "Zach ."; 
        const shift = 5; 
        const actual = caesar(message, shift); 
        const expected = "efhm ."; 
        expect(actual).to.equal(expected); 
    })
})