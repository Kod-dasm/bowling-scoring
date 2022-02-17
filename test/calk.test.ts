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

  it("should return 14 for calculateScore(X|7) and second frame for showFrame(1)", () => {
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

  it("should return 24 for calculateScore(X|7) and second frame for showFrame(1)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7");
    const bowlingFrame: string = bowling.showFrame(1);

    expect(bowlingScore).toBe(24);
    expect(bowlingFrame).toBe(`
    ----------------
    frame [2]
    result [7] 
    frameScore [7]
    total [24]
    ----------------
    `);
  });
});
