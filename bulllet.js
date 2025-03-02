// bullet.js - Handles bullet movement and rendering
export class Bullet {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.width = 5;
        this.height = 10;
        this.offScreen = false;
    }

    update() {
        this.y -= this.speed;
        if (this.y < 0) this.offScreen = true;
    }

    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
