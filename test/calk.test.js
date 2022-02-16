"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calk_1 = __importDefault(require("../src/calk"));
describe("test calculateScore methods", () => {
    let bowling;
    beforeEach(() => {
        bowling = new calk_1.default();
    });
    it("should return 10 for calculateScore(X)", () => {
        const bowlingScore = bowling.calculateScore("X");
        expect(bowlingScore).toBe(10);
    });
    // it("should return 14 for calculateScore('X')", () => {
    //   const bowlingScore: number = bowling.calculateScore("X|11");
    //   expect(bowlingScore).toBe(14);
    // });
});
