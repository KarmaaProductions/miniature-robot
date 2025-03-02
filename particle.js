// particle.js - Handles particles for effects
export class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * -2;
        this.life = 30; // Frames
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
    }

    render(ctx) {
        ctx.fillStyle = "orange";
        ctx.globalAlpha = this.life / 30;
        ctx.fillRect(this.x, this.y, 5, 5);
        ctx.globalAlpha = 1; // Reset opacity
    }
}
