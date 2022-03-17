import {settings} from "./settings";
import {Particle} from "./Particle";

export const animation = {
    init(htmlCanvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, center: { x: number, y: number }) {
        this.canvas = htmlCanvasElement;
        this.ctx = ctx;
        this.center = center
        this.particles = [];
        this.color = settings.colors[Math.floor(Math.random() * settings.colors.length)];

        for (let i = 0; i < settings.nbParticle; i++) {
            this.particles.push(new Particle(this.center, this.ctx, this.color));

        }

        this.animate()

        return this;
    },
    animate() {
        this.ctx.fillStyle = 'rgba(250,250,250,0.08)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle: Particle) => {
            particle.update()
        });

        requestAnimationFrame(() => {
            this.animate();
        });
    },

}