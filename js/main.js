import onClick from "./interaction/onClick.js";
import zoom from "./interaction/zoom.js";
import resize from "./mathFunctions/resize.js";

export const app = new PIXI.Application({
    backgroundColor: 0xd1f6ff,
    width: 1024,
    height: 768,
});
document.body.appendChild(app.view);
resize();

window.addEventListener("resize", resize);

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

export const dots = new PIXI.Container();
export const line = new PIXI.Graphics();
app.stage.addChild(dots);
app.stage.addChild(line);
