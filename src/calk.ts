interface Frame {
  numberFrame?: number, 
  result?: string, 
  frameScore: number, 
  total: number
}
let arrayFrames: Frame[];

export default class Calculator {

  calculateScore(str: string): number {
    arrayFrames = [];
    const frames: string[] = str.split("|");
    
    const prizePoints = [...Array(frames.length).fill(0)];
    let score: number = 0;

    for (let frame: number = 0; frame < frames.length; frame++) {
      arrayFrames.push({ numberFrame: frame + 1, result: '', frameScore: 0, total: score })
      for (let cast: number = 0; cast < frames[frame].length; cast++) {
        const pointsForCast: string = frames[frame][cast];
        const curFrame: Frame = arrayFrames[frame];

        cast === 0 
        ? curFrame.result = pointsForCast
        : curFrame.result += ' ' + pointsForCast

        if (pointsForCast === "X") {
          prizePoints[frame] = 2;
        } else if (pointsForCast === "/" && cast === 1) {
          prizePoints[frame] = 1;
        }

        score += this.calculateScoreCast(pointsForCast, frames[frame], cast);

        if (frame > 0) {
          const checkedCountFrame: number = frame === 1 ? 1 : 2;

          for (
            let countPrize: number = checkedCountFrame;
            countPrize > 0;
            countPrize--
          ) {
            const numFrame: number = frame - countPrize;
            let prize: number = this.calculateScoreCast(
              pointsForCast,
              frames[frame],
              cast
            );

            if (prizePoints[numFrame] > 0) {
              prizePoints[numFrame]--;
              for(let i: number = numFrame; i < frame;i++) {
                arrayFrames[i].total += prize;  
              }
              arrayFrames[numFrame].frameScore += prize;
              score += prize;
            }
          }
        }
        curFrame.frameScore = score - curFrame.total;
        curFrame.total = score;
      }
    }

    return score;
  }

  calculateScoreCast(
    pointsForCast: string,
    frame: string,
    cast: number
  ): number {
    let points: number = 0;

    if (pointsForCast === "X") {
      points = 10;
    } else if (pointsForCast === "/" && cast === 1) {
      points = 10 - Number(frame[0]);
    } else if (Number(pointsForCast) > 0) {
      points = Number(pointsForCast);
    }
    return points;
  }

  showFrame(numberFrame: number): string {
    let str: string = `
    ----------------
    frame [${arrayFrames[numberFrame].numberFrame}]
    result [${arrayFrames[numberFrame].result}] 
    frameScore [${arrayFrames[numberFrame].frameScore}]
    total [${arrayFrames[numberFrame].total}]
    ----------------
    `
    
    console.log(str)

    return str
  }
}
