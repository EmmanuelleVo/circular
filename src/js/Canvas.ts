export class Canvas {
    private readonly canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private center: {x: number, y: number}

    constructor(canvasElt: HTMLCanvasElement, ctx: CanvasRenderingContext2D, center: { x: number, y: number }) {
        this.canvasElt = canvasElt
        this.ctx = ctx
        this.center = center

        this.canvasElt.width = window.innerWidth;
        this.canvasElt.height = window.innerHeight;

        this.resizeCanvas();
        this.addEventListeners();

        return this
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        window.addEventListener('mousemove', (e: MouseEvent) => {
            this.center.x = e.x;
            this.center.y = e.y;
        });
    }

    resizeCanvas() {
        this.canvasElt.width = window.innerWidth;
        this.canvasElt.height = window.innerHeight;
        this.center.x = this.canvasElt.width / 2;
        this.center.y = this.canvasElt.height / 2;
    }

}