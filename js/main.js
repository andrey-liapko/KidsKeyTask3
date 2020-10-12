import onClick from "./interaction/onClick.js";
import zoom from "./interaction/zoom.js";
import resize from "./mathFunctions/resize.js";
import drawLine from "./render/drawLine.js";
import pushRandomDot from "./mathFunctions/pushRandomDot.js";
import drawDot from "./render/drawDot.js";

export const app = new PIXI.Application({
    backgroundColor: 0xd1f6ff,
    width: 1024,
    height: 768,
});
document.body.appendChild(app.view);
resize();

window.addEventListener("resize", resize);

window.zoomScale = 1;
if (window.addEventListener) {
    if ("onwheel" in document) {
        // IE9+, FF17+, Ch31+
        window.addEventListener("wheel", zoom);
    } else if ("onmousewheel" in document) {
        // устаревший вариант события
        window.addEventListener("mousewheel", zoom);
    } else {
        // Firefox < 17
        window.addEventListener("MozMousePixelScroll", zoom);
    }
}

app.renderer.plugins.interaction.on("pointerdown", onClick);

export let dotsXY = [];
for (let i = 0; i < 1000; i++) {
    pushRandomDot();
}

export const dots = new PIXI.Container();
export const line = new PIXI.Graphics();

for (let i = 0; i < dotsXY.length; i++) {
    drawDot(dotsXY[i]);
}

drawLine();

app.stage.addChild(dots);
app.stage.addChild(line);
