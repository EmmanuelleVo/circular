import {Canvas} from "./Canvas";
import {animation} from "./animation";

class Main {
    private readonly canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private center: {x: number, y: number}
    private canvas: Canvas
    private animation: object

    constructor() {
        this.canvasElt = document.getElementById("my-canvas") as HTMLCanvasElement;
        this.ctx = this.canvasElt.getContext("2d");
        this.center = {
            x: this.canvasElt.width / 2,
            y: this.canvasElt.height / 2
        }
        this.canvas = new Canvas(this.canvasElt, this.ctx, this.center);
        this.animation = animation.init(this.canvasElt, this.ctx, this.center);
    }
}

new Main();