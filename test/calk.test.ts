import Calculator from "../src/calk";

describe("test calculateScore methods", () => {
  let bowling: Calculator;

  beforeEach(() => {
    bowling = new Calculator();
  });

  it("should return 10 for calculateScore(X)", () => {
    const bowlingScore: number = bowling.calculateScore("X");

    expect(bowlingScore).toBe(10);
  });

  it("should return 14 for calculateScore(X|11)", () => {
    const bowlingScore: number = bowling.calculateScore("X|11");

    expect(bowlingScore).toBe(14);
  });
});
