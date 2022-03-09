export const canvas = {
    init(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, center: { x: number, y: number }) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.center = center;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.resizeCanvas();
        this.addEventListeners();
        return this;
    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        window.addEventListener('mousemove', (event: MouseEvent) => {
            this.center.y = event.y;
            this.center.x = event.x;
        });
    },
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.center.x = this.canvas.width / 2;
        this.center.y = this.canvas.height / 2;
    },
}