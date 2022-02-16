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
    it("should return 14 for calculateScore('X|11')", () => {
        const bowlingScore = bowling.calculateScore("X|11");
        expect(bowlingScore).toBe(14);
    });
});
