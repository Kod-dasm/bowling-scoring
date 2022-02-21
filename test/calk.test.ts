import Calculator from "../src/calk";

describe("test calculateScore methods", () => {
  let bowling: Calculator;

  beforeEach(() => {
    bowling = new Calculator();
  });

  it("should return 10 for calculateScore(X) and first frame for showFrame(0)", () => {
    const bowlingScore: number = bowling.calculateScore("X");
    const bowlingFrame: object = bowling.showFrame(0);

    expect(bowlingScore).toBe(10);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 1, result: 'X', frameScore: 10 , total: 10 });
  });

  it("should return 14 for calculateScore(X|7) and second frame for showFrame(1)", () => {
    const bowlingScore: number = bowling.calculateScore("X|11");
    const bowlingFrame: object = bowling.showFrame(1);

    expect(bowlingScore).toBe(14);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 2, result: '1 1', frameScore: 2 , total: 14 });
  });

  it("should return 24 for calculateScore(X|7) and second frame for showFrame(1)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7");
    const bowlingFrame: object = bowling.showFrame(1);

    expect(bowlingScore).toBe(24);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 2, result: '7', frameScore: 7 , total: 24 });
  });

  it("should return 44 for calculateScore(X|7/|7) and second frame for showFrame(2)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7/|7");
    const bowlingFrame: object = bowling.showFrame(2);

    expect(bowlingScore).toBe(44);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 3, result: '7', frameScore: 7 , total: 44 });
  });

  it("should return 76 for calculateScore(X|7/|72|9/|X) and second frame for showFrame(3)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7/|72|9/|X");
    const bowlingFrame: object = bowling.showFrame(3);

    expect(bowlingScore).toBe(76);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 4, result: '9 /', frameScore: 20 , total: 66 });
  });

  it("should return 165 for calculateScore(X|7/|72|9/|X|X|X|23|6/|7/) and second frame for showFrame(7)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7/|72|9/|X|X|X|23|6/|7/");
    const bowlingFrame: object = bowling.showFrame(7);

    expect(bowlingScore).toBe(165);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 8, result: '2 3', frameScore: 5 , total: 138 });

  });

  it("should return 168 for calculateScore(X|7/|72|9/|X|X|X|23|6/|7/3) and second frame for showFrame(9)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7/|72|9/|X|X|X|23|6/|7/3");
    const bowlingFrame: object = bowling.showFrame(9);

    expect(bowlingScore).toBe(168);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 10, result: '7 / 3', frameScore: 13 , total: 168 });

  });
  
  it("should return 168 for calculateScore(X|X|X|X|X|X|X|X|X||XXX) and second frame for showFrame(9)", () => {
    const bowlingScore: number = bowling.calculateScore("X|X|X|X|X|X|X|X|X||XXX");
    const bowlingFrame: object = bowling.showFrame(9);

    expect(bowlingScore).toBe(300);
    expect(bowlingFrame).toStrictEqual({ numberFrame: 10, result: 'X X X', frameScore: 30 , total: 300 });
  });
});
