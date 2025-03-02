// player.js - Handles player movement and shooting
import { Bullet } from "./bullet.js";
import { Particle } from "./particle.js";
import { applyPlayerGradient } from "./playerGradient.js";

export class Player {
    constructor(game) {
        this.game = game;
        this.x = 100;
        this.y = 100;
        this.speed = 5;
    }

    update() {
        // Handle movement logic (e.g., arrow keys or WASD)
    }

    render(ctx) {
        applyPlayerGradient(ctx, this.x, this.y);
    }

    shoot() {
        this.game.bullets.push(new Bullet(this.game, this.x + 10, this.y));
        for (let i = 0; i < 10; i++) {
            this.game.particles.push(new Particle(this.x + 10, this.y));
        }
    }
}
