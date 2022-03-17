export class Hsl {
    private hue: number;
    private saturation: number;
    private lightness: number

    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    toString() {
        return `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
    }

    generateNew() {
        return new Hsl(this.hue,50 + Math.ceil(Math.random() * 50), 50+Math.ceil(Math.random() * 50));
    }

}