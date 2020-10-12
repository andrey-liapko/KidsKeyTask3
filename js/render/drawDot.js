import { app, dots, dotsXY } from "../main.js";

export default function drawDot(dotXY) {
    const dot = new PIXI.Graphics();

    dot.beginFill(0x000000, 1);
    dot.drawCircle(0, 0, 3);
    dot.endFill();
    dot.x = dotXY.x;
    dot.y = dotXY.y;
    dot.pivot.set(0.5);
    dots.addChild(dot);
}
