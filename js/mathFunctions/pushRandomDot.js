import { app, dotsXY } from "../main.js";
import randomNumber from "./randomNumber.js";

export default function pushRandomDot() {
    let flaq = true;
    const x = randomNumber(app.screen.width);
    const y = randomNumber(app.screen.height);

    for (let i = 0; i < dotsXY.length; i++) {
        if (dotsXY[i].x == x && dotsXY[i].y == y) {
            flaq = false;
            break;
        }
    }

    if (flaq == true) {
        dotsXY.push({ x, y });
    } else {
        pushRandomDot();
    }
}
