import calcLineEquation from "../mathFunctions/calcLineEquation.js";
import { dotsXY, app, line} from "../main.js";

export default function drawLine() {
    const lineEquation = calcLineEquation(dotsXY);

    const lineYStart = -lineEquation.C / lineEquation.B;
    const lineYEnd = -(lineEquation.C + lineEquation.A * app.screen.width) / lineEquation.B;

    line.lineStyle(1, 0x000000);
    line.moveTo(0, lineYStart  * app.stage.scale.y);
    line.lineTo(app.screen.width * app.stage.scale.x, lineYEnd  * app.stage.scale.y);

    app.stage.addChild(line);
}
