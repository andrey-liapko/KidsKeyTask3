export default function calcLineEquation(dotsXY) {
    dotsXY.sort((a, b) => {
        return a.y - b.y;
    });
    const yMax = dotsXY[0].y;
    const yMin = dotsXY[dotsXY.length - 1].y;

    dotsXY.sort((a, b) => {
        if (a.x != b.x) {
            return a.x - b.x;
        } else {
            return a.y - b.y;
        }
    });
    //const middleIndex = dotsXY.length / 2 - 1;

    const middleDot = {
        x: (dotsXY[dotsXY.length / 2 - 1].x + dotsXY[dotsXY.length / 2].x) / 2,
        y: (dotsXY[dotsXY.length / 2 - 1].y + dotsXY[dotsXY.length / 2].y) / 2,
    };
    let dot1 = { x: null, y: null };
    let dot1Index;

    for (dot1Index = 0; dot1Index < dotsXY.length / 2; dot1Index++) {
        if (dotsXY[dotsXY.length / 2 - dot1Index].x != middleDot.x) {
            dot1.x = dotsXY[dotsXY.length / 2 - dot1Index].x;
            dot1.y = middleDot.y - 1;
            break;
        }
    }

    if (dot1.x == undefined) {
        dot1.x = middleDot.x - 1;
        dot1.y = dotsXY[dotsXY.length / 2 - dot1Index].y;
    }

    const lineDot1 = {
        x: middleDot.x,
        y: (middleDot.y + dot1.y) / 2,
    };
    const lineDot2 = {
        x: middleDot.x + (middleDot.x - dot1.x) / 2,
        y: middleDot.y - yMax + yMin,
    };

    const lineA = lineDot1.y - lineDot2.y;
    const lineB = lineDot2.x - lineDot1.x;
    const lineC = lineDot1.x * lineDot2.y - lineDot2.x * lineDot1.y;

    return { A: lineA, B: lineB, C: lineC };
}
