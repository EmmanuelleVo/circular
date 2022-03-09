import {canvas} from "./canvas";
import {Particle} from "./Particle";
import {animation} from "./animation";

const app = {
    init(htmlCanvasElement: HTMLCanvasElement) {
        this.htmlCanvasElement = htmlCanvasElement;
        this.ctx = this.htmlCanvasElement.getContext("2d");
        this.center = {x: this.htmlCanvasElement.width / 2, y: this.htmlCanvasElement.height / 2}
        this.canvas = canvas.init(htmlCanvasElement, this.ctx, this.center);
        this.animation = animation.init(this.htmlCanvasElement, this.ctx, this.center);
        this.animation.animate();
    }
}

app.init(document.getElementById("my-canvas") as HTMLCanvasElement);