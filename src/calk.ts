//X 1/ -X 5/

export default class Calculator {
  calculateScore(str: string): number {
    const frames: string[] = str.split("|");
    const prizePoints = [...Array(frames.length).fill(0)];
    let score: number = 0;
    
    for(let frame: number = 0; frame < frames.length; frame++) {

      for(let cast: number = 0; cast < frames[frame].length; cast++) {
        const pointsForCast: string = frames[frame][cast];
        
        if(pointsForCast === 'X') {
          prizePoints[frame] = 2;
        }
        else if(pointsForCast === '/' && cast === 1) {
          prizePoints[frame] = 1;
        }

        score += this.calculateScoreCast(pointsForCast, frames[frame], cast);

        if(frame > 0) {
          const checkedCountFrame: number = frame === 1 ? 1 : 2; 

          for(let countPrize: number = checkedCountFrame; countPrize > 0; countPrize--) {
            let prize: number = this.calculateScoreCast(pointsForCast, frames[frame], cast);

            if(prizePoints[frame - countPrize] > 0) {
              prizePoints[frame - countPrize]--
              score += prize;
            }
          }
        }
      }
    }
    
    return score;
  }

  calculateScoreCast(pointsForCast: string, frame: string, cast: number): number {
    let points: number = 0

    if(pointsForCast === 'X') {
      points = 10;
    }
    else if(pointsForCast === '/' && cast === 1) {
      points = 10 - Number(frame[0]);
    }
    else if(Number(pointsForCast) > 0) {
      points = Number(pointsForCast);
    }
    return points;
  }
}

// for (let frame: number = 0; frame < frames.length; frame++) {
    
//   for (let cast: number = 0; cast < frames[frame].length; cast++) {
//     let pointsForCastStr: string = frames[frame][cast];

//     if (pointsForCastStr === "X" && cast === 0) {
//       prizePoints[frame] = 2;
//       score += 10;
//     }
//     // else if(pointsForCastStr === 'X' || pointsForCastStr === '/' && cast === 1) {
//     //   prizePoints[frame] = 1;
//     //   pointsForCastStr === 'X' ? score += 10 : score += 10 - Number(frames[frame][0]);
//     // }
//     else {
//       score += Number(pointsForCastStr);
//     }

//     if (frame > 1) {

//       for (
//         let countPrize: number = frame < 2 
//           ? 1 
//           : 2;
//         countPrize >= 1;
//         countPrize--
//       ) {
//         let prize: number = 0;

//         if (pointsForCastStr === "X") {
//           prize = 10;
//         } else if (pointsForCastStr === "/") {
//           prize = 10 - Number(frames[frame][0]);
//         } else {
//           prize = Number(pointsForCastStr);
//         }

//         console.log("prizePoints = ", prizePoints);

//         if (prizePoints[frame - countPrize] > 0) {
//           score += prize;
//           prizePoints[frame - countPrize]--;
//         }
//       }
//     }

//     console.log("score = ", score);

//   }
// }