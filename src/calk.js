"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    calculateScore(str) {
        const frames = str.split("|");
        const prizePoints = [...Array(frames.length).fill(0)];
        let score = 0;
        for (let frame = 0; frame < frames.length; frame++) {
            for (let cast = 0; cast < frames[frame].length; cast++) {
                let pointsForCastStr = frames[frame][cast];
                if (pointsForCastStr === "X" && cast === 0) {
                    prizePoints[frame] = 2;
                    score += 10;
                }
                // else if(pointsForCastStr === 'X' || pointsForCastStr === '/' && cast === 1) {
                //   prizePoints[frame] = 1;
                //   pointsForCastStr === 'X' ? score += 10 : score += 10 - Number(frames[frame][0]);
                // }
                else {
                    score += Number(pointsForCastStr);
                }
                if (frame > 1) {
                    for (let countPrize = frame < 2 ? 1 : 2; countPrize >= 1; countPrize--) {
                        let prize = 0;
                        if (pointsForCastStr === "X") {
                            prize = 10;
                        }
                        else if (pointsForCastStr === "/") {
                            prize = 10 - Number(frames[frame][0]);
                        }
                        else {
                            prize = Number(pointsForCastStr);
                        }
                        console.log("prizePoints = ", prizePoints);
                        if (prizePoints[frame - countPrize] > 0) {
                            score += prize;
                            prizePoints[frame - countPrize]--;
                        }
                    }
                }
                console.log("score = ", score);
            }
        }
        return score;
    }
}
exports.default = Calculator;
// const bowling: Calculator = new Calculator();
// console.log(bowling.calculateScore("X|7/|72"));
