import Calculator from "../src/calk";

describe("test calculateScore methods", () => {
  let bowling: Calculator;

  beforeEach(() => {
    bowling  = new Calculator();
  });

  it("should return 15 for calculateScore('X|11')", () => {
    const bowlingScore: number = bowling.calculateScore("X|11");
    expect(bowlingScore).toBe(14);
  });
});
