// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius", () => {
    it("should ingnore capital letters", () => {
        const message = "Zach"; 
        const actual = polybius(message); 
        const expected = "55113132";
        expect(actual).to.equal(expected);
    })

    it("should translate letters i and j to 42", () => {
        const message = "iijj";
        const actual = polybius(message);
        const expected = "42424242";
        expect(actual).to.equal(expected);
    })

    it("should decode 42 to i/j", () => {
        const message = "424242"; 
        const actual = polybius(message, false);
        const expected = "i/ji/ji/j"; 
        expect(actual).to.equal(expected);
    })

    it("should maintain spaces", () => {
        const message = "za ch"; 
        const actual = polybius(message); 
        const expected = "5511 3132";
        expect(actual).to.equal(expected);
    })
})