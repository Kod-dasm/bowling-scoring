import Calculator from "../src/calk";
import { Frame } from "../src/calk";

describe("test calculateScore methods", () => {
  let bowling: Calculator;

  beforeEach(() => {
    bowling = new Calculator();
  });

  it("should return 10 for calculateScore(X) and first frame for showFrame(0)", () => {
    const bowlingScore: number = bowling.calculateScore("X");
    const bowlingFrame: Frame = bowling.showFrame(0);

    expect(bowlingScore).toBe(10);
    expect(bowlingFrame.numberFrame).toStrictEqual(1);
    expect(bowlingFrame.result).toStrictEqual("X");
    expect(bowlingFrame.frameScore).toStrictEqual(10);
    expect(bowlingFrame.total).toStrictEqual(10);
  });

  it("should return 14 for calculateScore(X|7) and second frame for showFrame(1)", () => {
    const bowlingScore: number = bowling.calculateScore("X|11");
    const bowlingFrame: Frame = bowling.showFrame(1);

    expect(bowlingScore).toBe(14);
    expect(bowlingFrame.numberFrame).toBe(2);
    expect(bowlingFrame.result).toBe("1 1");
    expect(bowlingFrame.frameScore).toBe(2);
    expect(bowlingFrame.total).toBe(14);
  });

  it("should return 24 for calculateScore(X|7) and second frame for showFrame(1)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7");
    const bowlingFrame: Frame = bowling.showFrame(1);

    expect(bowlingScore).toBe(24);
    expect(bowlingFrame.numberFrame).toBe(2);
    expect(bowlingFrame.result).toBe("7");
    expect(bowlingFrame.frameScore).toBe(7);
    expect(bowlingFrame.total).toBe(24);
  });

  it("should return 44 for calculateScore(X|7/|7) and second frame for showFrame(2)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7/|7");
    const bowlingFrame: Frame = bowling.showFrame(2);

    expect(bowlingScore).toBe(44);
    expect(bowlingFrame.numberFrame).toBe(3);
    expect(bowlingFrame.result).toBe("7");
    expect(bowlingFrame.frameScore).toBe(7);
    expect(bowlingFrame.total).toBe(44);
  });

  it("should return 76 for calculateScore(X|7/|72|9/|X) and second frame for showFrame(3)", () => {
    const bowlingScore: number = bowling.calculateScore("X|7/|72|9/|X");
    const bowlingFrame: Frame = bowling.showFrame(3);

    expect(bowlingScore).toBe(76);
    expect(bowlingFrame.numberFrame).toBe(4);
    expect(bowlingFrame.result).toBe("9 /");
    expect(bowlingFrame.frameScore).toBe(20);
    expect(bowlingFrame.total).toBe(66);
  });

  it("should return 165 for calculateScore(X|7/|72|9/|X|X|X|23|6/|7/) and second frame for showFrame(7)", () => {
    const bowlingScore: number = bowling.calculateScore(
      "X|7/|72|9/|X|X|X|23|6/|7/"
    );
    const bowlingFrame: Frame = bowling.showFrame(7);

    expect(bowlingScore).toBe(165);
    expect(bowlingFrame.numberFrame).toBe(8);
    expect(bowlingFrame.result).toBe("2 3");
    expect(bowlingFrame.frameScore).toBe(5);
    expect(bowlingFrame.total).toBe(138);
  });

  it("should return 168 for calculateScore(X|7/|72|9/|X|X|X|23|6/|7/3) and second frame for showFrame(9)", () => {
    const bowlingScore: number = bowling.calculateScore(
      "X|7/|72|9/|X|X|X|23|6/|7/3"
    );
    const bowlingFrame: Frame = bowling.showFrame(9);

    expect(bowlingScore).toBe(168);
    expect(bowlingFrame.numberFrame).toBe(10);
    expect(bowlingFrame.result).toBe("7 / 3");
    expect(bowlingFrame.frameScore).toBe(13);
    expect(bowlingFrame.total).toBe(168);
  });

  it("should return 168 for calculateScore(X|X|X|X|X|X|X|X|X||XXX) and second frame for showFrame(9)", () => {
    const bowlingScore: number = bowling.calculateScore(
      "X|X|X|X|X|X|X|X|X||XXX"
    );
    const bowlingFrame: Frame = bowling.showFrame(9);

    expect(bowlingScore).toBe(300);
    expect(bowlingFrame.numberFrame).toBe(10);
    expect(bowlingFrame.result).toBe("X X X");
    expect(bowlingFrame.frameScore).toBe(30);
    expect(bowlingFrame.total).toBe(300);
  });
});
