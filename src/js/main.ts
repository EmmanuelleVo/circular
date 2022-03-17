import {canvas} from "./canvas";
import {animation} from "./animation";

const main = {
    init() {
        this.canvasElt = document.getElementById("my-canvas") as HTMLCanvasElement;
        this.ctx = this.canvasElt.getContext("2d");
        this.center = {
            x: this.canvasElt.width / 2,
            y: this.canvasElt.height / 2
        }
        this.canvas = canvas.init(this.canvasElt, this.ctx, this.center);
        this.animation = animation.init(this.canvasElt, this.ctx, this.center);
    }
}

main.init();