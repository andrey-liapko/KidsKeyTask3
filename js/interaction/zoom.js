import { app, dotsXY,dots, line } from "../main.js";
import drawDot from "../render/drawDot.js";
import drawLine from "../render/drawLine.js";

export default function zoom(e) {
    e = e || window.event;

    let s = e.deltaY || e.detail || e.wheelDelta;
    const x = e.offsetX;
    const y = e.offsetY;

    s = s > 0 ? 0.5 : 2;
    const worldPos = {
        x: (x - app.stage.x) / app.stage.scale.x,
        y: (y - app.stage.y) / app.stage.scale.y,
    };
    const newScale = { x: app.stage.scale.x * s, y: app.stage.scale.y * s };

    const newScreenPos = {
        x: worldPos.x * newScale.x + app.stage.x,
        y: worldPos.y * newScale.y + app.stage.y,
    };

    app.stage.x -= newScreenPos.x - x;
    app.stage.y -= newScreenPos.y - y;
    app.stage.scale.x = newScale.x;
    app.stage.scale.y = newScale.y;
}
