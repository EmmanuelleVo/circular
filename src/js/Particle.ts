import {settings} from "./settings";
import {Hsl} from "./Hsl";

export class Particle {
    private ctx: CanvasRenderingContext2D;
    private color: string;
    private radius: number;
    private position: { x: number, y: number };
    private center: { x: number, y: number };
    private speed: number;
    private radian: number;
    private distanceCircle: number;

    constructor(center: { x: number, y: number }, ctx: CanvasRenderingContext2D, startColor: Hsl) {
        this.ctx = ctx;
        this.center = center;
        this.color = startColor.generateNew().toString();
        this.radian = Math.random() * Math.PI * 2;
        this.speed = 0.05;
        this.radius = settings.radius.min + Math.random() * (settings.radius.max - settings.radius.min);
        this.distanceCircle = settings.distanceCircle.min + Math.random() * (settings.distanceCircle.max - settings.distanceCircle.min);
        this.position = {x: this.center.x, y: this.center.y}
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
        this.radian += this.speed;
        this.draw()
    }

}
