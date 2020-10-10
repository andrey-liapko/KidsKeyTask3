import { app } from "../main.js";

export default function resize() {
    app.renderer.resize(
        window.innerWidth - window.innerWidth * 0.05,
        window.innerHeight - window.innerHeight * 0.05
    );
}
