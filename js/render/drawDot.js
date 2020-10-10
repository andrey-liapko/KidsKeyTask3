import { dots } from "../main.js";
import collision from "../mathFunctions/collision.js";

export default function drawDot(event) {
    const dot = new PIXI.Graphics();

    dot.beginFill(0x000000, 1);
    dot.drawCircle(0, 0, 3);
    dot.endFill();
    dot.position.copyFrom(event.data.global);
    dot.pivot.set(0.5);

    let flag = true;
    for (let i = 0; i < dots.children.length; i++) {
        if (collision(dots.children[i], dot)) {
            flag = false;
            break;
        }
    }

    if (flag) {
        dots.addChild(dot);
    }
}
