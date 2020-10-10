import calcLineEquation from "../mathFunctions/calcLineEquation.js";
import { dots, app, line } from "../main.js";

export default function drawLine() {
    const lineY = calcLineEquation(dots.children);

    line.lineStyle(1, 0x000000);
    line.moveTo(0, lineY);
    line.lineTo(app.screen.width, lineY);

    app.stage.addChild(line);
}
