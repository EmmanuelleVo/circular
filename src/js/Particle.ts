import {settings} from "./settings";
import {Hsl} from "./Hsl";

export class Particle {

    private radius: number;
    private center: { x: number, y: number };
    private position: { x: number, y: number };
    private velocity: number;
    private color: string;
    private ctx: CanvasRenderingContext2D;
    private radian: number;
    private distanceCircle: number;


    constructor(center: { x: number, y: number }, ctx: CanvasRenderingContext2D, startColor: Hsl) {
        this.color = startColor.generateNew().toString();
        this.radian = Math.random() * Math.PI * 2;
        this.velocity = 0.025;
        this.radius = settings.radius.min + Math.random() * (settings.radius.max - settings.radius.min);
        this.distanceCircle = settings.distanceCircle.min + Math.random() * settings.distanceCircle.max - settings.distanceCircle.min;
        this.center = center;
        this.position = {x: this.center.x, y: this.center.y}
        this.ctx = ctx;
        return this;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    update() {
        this.position.x = this.center.x + Math.cos(this.radian) * this.distanceCircle;
        this.position.y = this.center.y + Math.sin(this.radian) * this.distanceCircle;
        this.radian += this.velocity;
        this.draw()
    }

}