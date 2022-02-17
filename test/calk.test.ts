import Calculator from "../src/calk";

describe("test calculateScore methods", () => {
  let bowling: Calculator;

  beforeEach(() => {
    bowling = new Calculator();
  });

  it("should return 10 for calculateScore(X) and first frame for showFrame(0)", () => {
    const bowlingScore: number = bowling.calculateScore("X");
    const bowlingFrame: string = bowling.showFrame(0);

    expect(bowlingScore).toBe(10);
    expect(bowlingFrame).toBe(`
    ----------------
    frame [1]
    result [X] 
    frameScore [10]
    total [10]
    ----------------
    `);
  });

  it("should return 14 for calculateScore(X|11)", () => {
    const bowlingScore: number = bowling.calculateScore("X|11");
    const bowlingFrame: string = bowling.showFrame(1);

    expect(bowlingScore).toBe(14);
    expect(bowlingFrame).toBe(`
    ----------------
    frame [2]
    result [1 1] 
    frameScore [2]
    total [14]
    ----------------
    `);
  });

});
